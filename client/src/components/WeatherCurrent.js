import React, { useEffect, useState } from "react";

function CurrentWeather({forecast}) {

  const tempHigh = 100
  const tempLow = 32
  const wind = 5
  const windDir = 320
  const humidity = 80

  const conditions = "Rain"

  return (
    <div className="CurrentWeather">
      <span className="temp">{tempHigh} / {tempLow}</span>
      <span className="conditions">{conditions}</span>
      <span className="wind">{wind} mph @{windDir}</span>
      <span className="humidity">{humidity}%</span>
    </div>
  )
}

export default CurrentWeather;
