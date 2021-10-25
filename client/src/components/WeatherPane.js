import React from "react";
import CurrentWeather from "./WeatherCurrent";
import HourlyWeather from "./WeatherHourly";
import DailyWeather from "./WeatherDaily";
import WeatherMap from "./WeatherMap"

function WeatherPane({weatherData}) {

  console.log(weatherData)

  const current = weatherData.current
  const hourly = weatherData.hourly
  const daily = weatherData.daily


  if (!hourly) 
    return (<div>Setting up</div>)


  return (
    <div className="WeatherPane">
      <CurrentWeather weather={current} />
      <HourlyWeather grid="Hourly1" weather={hourly[0]}/>
      <HourlyWeather grid="Hourly2" weather={hourly[1]}/>
      <HourlyWeather grid="Hourly3" weather={hourly[2]}/>

      <DailyWeather grid="Day1" weather={daily[0]}/>
      <DailyWeather grid="Day2" weather={daily[1]}/>
      <DailyWeather grid="Day3" weather={daily[2]}/>
      <DailyWeather grid="Day4" weather={daily[3]}/>

      <WeatherMap />

    </div>
  )
}

export default WeatherPane;
