import React, { useState } from "react";
import Searchbox from "./SearchBox";
import InfoBox from "./InfoBox";

const WeatherApp = () => {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    temp: 25.05,
    tempMin: 25.04,
    tempMax: 25.05,
    feelsLike: 24.84,
    humidity: 47,
    weather: "haze",
  });

  // const updateInfo = (newInfo) =>{
  //   setWeatherInfo(newInfo)
  // }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <Searchbox />
      <InfoBox info={weatherInfo} />/
    </div>
  );
};

export default WeatherApp;
