const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('64b5f6f1b68c4cbabb8548c0ab321379')
const { promisify } = require ("util")
const redis = require('redis').createClient({"port":6379,"host":"home-cache-redis-headless.homelab","password":"Password"})

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.use(express.static('public'))



const lrange = promisify(redis.lrange).bind(redis)


let news = []

const getNews = async () => {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log('got news')
    news = response.articles
  }).catch((err)=>{
    console.error('Error: ', err.message)
  })
}
getNews()
setInterval(getNews, 30*60*1000)

app.get('/news', (req, res) => {

  const out = news.map((art)=>{
    return `
      <div class="clear ">
        <header>${art.title}</header>
        <section>${art.description}</section>
      </div>
    `
  }).join("")
  res.send('<div class="news">'+out+'</div>')
})

app.get('/events', (req,res)=>{

  lrange('events', 0, 30).then((data)=>{
    const out = data.map((es)=>{
      const e = JSON.parse(es)
      return `
        <div class="clear ">
        <header>${e.name} -- ${e.timestamp}</header>
        <section>${JSON.parse(e.event)}</section>
        </div>`
    }).join("")

    res.send('<div class="events">'+out+'</div>')
  }).catch((err)=>{ 
    res.send('<div class="events">'+err+'</div>')
  })
})

app.listen(port, () => {
  console.log(`Traffic app listening at http://localhost:${port}`)
})
