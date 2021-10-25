import React from "react";

function WeatherMap({url}) {

  return (
    <div className="WeatherMap">
      <iframe title="map" width="100%" height="100%" src="https://embed.windy.com/embed2.html?lat=43.930&lon=-121.992&detailLat=44.276&detailLon=-121.185&width=650&height=450&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=12&pressure=true&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0F&radarRange=-1" frameborder="0"></iframe>
    </div>
  )
}

export default WeatherMap;
