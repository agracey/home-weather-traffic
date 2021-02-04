const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('64b5f6f1b68c4cbabb8548c0ab321379');

const express = require('express')
const app = express()
const port = process.env.PORT|| 8080

app.use(express.static('public'))

app.get('/news', (req, res) => {
    newsapi.v2.topHeadlines({
        language: 'en',
        country: 'us'
    }).then(response => {

        const out = response.articles.map((art)=>{
            return `
<div class="clear ">
  <header>${art.title}</header>
  <section>${art.description}</section>
</div>
            `
        }).join("")
        res.send('<div class="news">'+out+'</div>')
    });
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})