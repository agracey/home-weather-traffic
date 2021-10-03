
import Redis from 'ioredis'
import NewsAPI from 'newsapi'
import fetch from 'node-fetch'

import { readFileSync } from 'fs'

const newsapi_key = readFileSync('/services/newsapi/key', 'utf8')
const weather_key = readFileSync('/services/weatherapi/key', 'utf8')
const weather_city = readFileSync('/services/weatherapi/city', 'utf8')
const redis_uri = readFileSync('/services/homecache/uri', 'utf8')

console.log({newsapi_key, redis_uri})

const newsapi = new NewsAPI(newsapi_key)


const redis = new Redis(redis_uri)
import express from 'express'


const app = express()
const port = process.env.PORT || 8080

app.use(express.static('client/build'))


let news = []

const getNews = async () => {
  newsapi.v2.topHeadlines({
    language: 'en',
    country: 'us'
  }).then(response => {
    news = response.articles
  }).catch((err)=>{
    console.error('News Error: ', err)
  })
}
getNews()
//setInterval(getNews, 30*60*1000)

app.get('/news', (req, res) => {
  res.send(news)
})




let weather = {}

const lat = 44
const long = -121

const getWeather = async () => {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${weather_key}&units=imperial`).then((res)=>(res.json())).then(response => {
    weather = response
  }).catch((err)=>{
    console.error('Weather Error: ', err)
  })
}
getWeather()
//setInterval(getWeather, 15*60*1000)


app.get('/weather', (req, res) => {
  res.send(weather)
})




app.get('/events', (req,res)=>{

  redis.lrange('events', 0, 30).then((data)=>{
    res.send(data.map(JSON.parse))
  }).catch((err)=>{ 
    console.error('Events Error: ', err)
    res.send([])
  })
})

app.listen(port, () => {
  console.log(process.env)
  console.log(`Traffic app listening at http://localhost:${port}`)
})




