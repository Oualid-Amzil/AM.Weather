import React from "react";
import { useSelector } from "react-redux";
import cloudImg from "../images/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg";

import { BsFillCloudsFill } from "react-icons/bs";
import "./LeftSide.css";

const LeftSide = () => {
  const currentweather = useSelector((state) => state.weather.current);

  const weatherInfo = Object.assign({}, currentweather.weather);

  const dateNow = new Date(currentweather.dt * 1000).toLocaleString("en-GB", {
    timeZone: "UTC",
  });

  return (
    <div className="left__side">
      <span className="title">AM.Weather</span>
      <span className="degree__value">
        {currentweather?.main?.temp.toFixed(0)}°C
      </span>
      <img src={cloudImg} alt="weather" />

      <div className="info">
        <div className="city__date">
          <h2>{`${currentweather.name}, ${currentweather.sys.country}`}</h2>
          <h5>{dateNow}</h5>
        </div>
        <div className="weather__icon">
          <img alt="weather" src={`icons/${weatherInfo[0]?.icon}.png`} />
          <span>{weatherInfo[0]?.description}</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
