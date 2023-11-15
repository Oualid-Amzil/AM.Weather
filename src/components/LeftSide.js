import React from "react";
import { useSelector } from "react-redux";
import { images } from "../ImagesArray";

import "./LeftSide.css";

const LeftSide = () => {
  const currentweather = useSelector((state) => state.weather.current);

  const weatherInfo = Object.assign({}, currentweather?.weather);

  const sunrise = new Date(currentweather?.sys?.sunrise * 1000).getHours();

  const sunset = new Date(currentweather?.sys?.sunset * 1000).getHours();

  const dateNow = new Date(currentweather?.dt * 1000).toLocaleString("en-GB", {
    timeZone: "UTC",
  });

  const hours = new Date(currentweather?.dt * 1000).getHours();

  const weatherImg = images.find((ele) => ele.name === weatherInfo[0]?.main);

  const fontColor =
    hours < sunset && hours > sunrise ? weatherImg?.color : "#fff";

  return (
    <div className="left__side">
      <div className="blur__wrapper"></div>
      <span className="title" style={{ color: `${fontColor}` }}>
        AM.Weather
      </span>
      <span className="degree__value" style={{ color: `${fontColor}` }}>
        {currentweather?.main?.temp.toFixed(0)}°C
      </span>
      <img
        src={
          hours < sunset && hours > sunrise
            ? weatherImg?.dayImage
            : weatherImg?.nightImage
        }
        alt="weather"
      />

      <div className="info">
        <div className="city__date">
          <h2
            style={{ color: `${fontColor}` }}
          >{`${currentweather.name}, ${currentweather?.sys?.country}`}</h2>
          <h5 style={{ color: `${fontColor}` }}>{dateNow}</h5>
        </div>
        <div className="weather__icon">
          <img alt="weather" src={`icons/${weatherInfo[0]?.icon}.png`} />
          <span style={{ color: `${fontColor}` }}>
            {weatherInfo[0]?.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
