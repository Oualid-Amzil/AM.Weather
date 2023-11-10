import React from "react";
import { BsSearch } from "react-icons/bs";

import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right__side">
      <div className="search__box">
        <div className="input">
          <input type="text" placeholder="location" />
        </div>
        <button>
          <BsSearch className="search__icon" />
        </button>
      </div>
      <div className="weather__details">
        <h3>Weather Details</h3>
        <div className="details">
          <div className="details__ele">
            <h4>Cloudy</h4>
            <span>86%</span>
          </div>
          <div className="details__ele">
            <h4>Humidity</h4>
            <span>62%</span>
          </div>
          <div className="details__ele">
            <h4>Wind</h4>
            <span>8Km/h</span>
          </div>
        </div>
      </div>
      <div className="weather__details">
        <h3>Next Days</h3>
        <div className="details">
          <div className="details__ele">
            <h4>monday</h4>
            <span>18C</span>
          </div>
          <div className="details__ele">
            <h4>Thurstday</h4>
            <span>90c</span>
          </div>
          <div className="details__ele">
            <h4>Widnesday</h4>
            <span>100c</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
