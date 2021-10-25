import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News';
import TrafficCamera from './components/TrafficCamera';
import WeatherPane from './components/WeatherPane';


function App() {
  const [news, setNews] = useState([])
  const [weatherData, setWeather] = useState({})

  const getWeather = ()=>{
    fetch('/news').then(res=>(res.json())).then(res=>{setNews(res)})
    fetch('/weather').then(res=>(res.json())).then(res=>{setWeather(res)})
  }

  useEffect(()=>{
    console.log('test')
    const timer = setInterval(getWeather,30000)

    getWeather()
    return ()=>{clearInterval(timer)}
  }, [])




  return (
    <div className="App">
      <div className="NewsPane">
        <News headlines={news} />
      </div>
      <WeatherPane weatherData={weatherData} />
      <div className="TrafficPane">
        <TrafficCamera url="https://tripcheck.com/RoadCams/cams/US97 at SW 61st St S_pid4073.JPG"/>
        <TrafficCamera url="https://tripcheck.com/RoadCams/cams/Santiam%20Pass_pid2728.JPG"/>
        <TrafficCamera url="https://tripcheck.com/RoadCams/cams/Century%20Dr%20at%20MP%2021.11%20E_pid3545.JPG"/>
      </div>
    </div>
  );
}

export default App;
