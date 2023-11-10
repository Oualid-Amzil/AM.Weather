import React from "react";
import cloudImg from "../images/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg";

import { BsFillCloudsFill } from "react-icons/bs";
import "./LeftSide.css";

const LeftSide = () => {
  return (
    <div className="left__side">
      <span className="title">AM.Weather</span>
      <img src={cloudImg} alt="weather" />
      <div className="degree">
        <h1>16</h1>
        <div className="info">
          <div className="city__date">
            <h2>London</h2>
            <h5>06:09 - Monday, 9 Sep '19</h5>
          </div>
          <div className="weather__icon">
            <BsFillCloudsFill className="cloud" />
            <span>cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
