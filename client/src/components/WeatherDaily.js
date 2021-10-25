import React from "react";

function WeatherForecast({grid, weather, name}) {


  const temp_min = weather.temp.min
  const temp_max = weather.temp.max
  const wind_speed = weather.wind_speed
  const wind_deg = weather.wind_deg
  const humidity = weather.humidity

  const conditions = weather.weather.main

  return (
    <div className={grid+" forecast"}>
    <span className="temp">{temp_min} / {temp_max}</span>
    <span className="conditions">{conditions}</span>
    <span className="wind">{wind_speed} mph @{wind_deg}</span>
    <span className="humidity">{humidity}%</span>
    </div>
  )
}

export default WeatherForecast;
