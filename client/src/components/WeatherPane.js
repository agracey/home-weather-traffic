import React from "react";
import CurrentWeather from "./WeatherCurrent";
import HourlyWeather from "./WeatherHourly";
import WeatherMap from "./WeatherMap"

function WeatherPane({weatherdata}) {


  return (
    <div className="WeatherPane">
      <CurrentWeather />
      <HourlyWeather grid="Hourly1"/>
      <HourlyWeather grid="Hourly2"/>
      <HourlyWeather grid="Hourly3"/>

      <HourlyWeather grid="Day1"/>
      <HourlyWeather grid="Day2"/>
      <HourlyWeather grid="Day3"/>
      <HourlyWeather grid="Day4"/>

      <WeatherMap />

    </div>
  )
}

export default WeatherPane;
