import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsyncPaginate } from "react-select-async-paginate";
import { searchActions } from "../app/searchSlice";
import { geoApiInstance } from "../api";
import { getCurrentWeather } from "../app/search-actions";

import { BsSearch } from "react-icons/bs";

import "./RightSide.css";

const RightSide = () => {
  const dispatch = useDispatch();

  const currentWeather = useSelector((state) => state.weather.current);

  const [location, setLocation] = useState("");

  const loadOptions = async (inputValue) => {
    try {
      const response = await geoApiInstance.get(
        `/cities?namePrefix=${inputValue}`
      );

      return {
        options: response.data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      return {
        options: [
          {
            value: 1,
            label: "nothing",
          },
        ],
      };
    }
  };

  const handleOnsearchChange = (data) => {
    dispatch(searchActions.addSearchLocation(data));
  };

  const handleOnChange = (searchData) => {
    setLocation(searchData);
    handleOnsearchChange(searchData);
  };

  const getweatherHandler = () => {
    dispatch(getCurrentWeather());
  };

  return (
    <div className="right__side">
      <div className="search__box">
        <div className="input__wrapper">
          <AsyncPaginate
            className="input"
            value={location}
            placeholder="Search for city"
            debounceTimeout={600}
            onChange={handleOnChange}
            loadOptions={loadOptions}
          />
        </div>
        <button onClick={getweatherHandler}>
          <BsSearch className="search__icon" />
        </button>
      </div>
      <div className="weather__details">
        <h3>Weather Details</h3>
        <div className="details">
          <div className="details__ele">
            <h4>Cloudy</h4>
            <span>{currentWeather?.clouds?.all} %</span>
          </div>
          <div className="details__ele">
            <h4>Humidity</h4>
            <span>{currentWeather?.main?.humidity} %</span>
          </div>
          <div className="details__ele">
            <h4>Wind</h4>
            <span>{currentWeather?.wind?.speed.toFixed(0)} Km/h</span>
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
