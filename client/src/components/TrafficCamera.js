import React, { useEffect, useState } from "react";

function TrafficCamera({url}) {


  const [timeHash, setTimeHash] = useState(new Date().getTime())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeHash(new Date().getTime());
    }, 30000);

    return () => clearTimeout(timer);
  });


  const src = `${url}?rand=${timeHash}`


  return (
    <div className="TrafficCameraContainer">
      <img className="TrafficCamera" src={src} alt="Traffic camera"/>
    </div>
  );
}

export default TrafficCamera;
