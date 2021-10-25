import React from "react";

function CurrentWeather({weather}) {

  const temp = weather.temp
  const feels_like = weather.feels_like
  const wind_speed = weather.wind_speed
  const wind_deg = weather.wind_deg
  const humidity = weather.humidity

  const conditions = weather.weather.main

  return (
    <div className="CurrentWeather">
      <span className="temp">{temp} / {feels_like}</span>
      <span className="conditions">{conditions}</span>
      <span className="wind">{wind_speed} mph @{wind_deg}</span>
      <span className="humidity">{humidity}%</span>
    </div>
  )
}

export default CurrentWeather;
