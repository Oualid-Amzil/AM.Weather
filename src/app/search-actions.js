import axios from "axios";
import { weatherActions } from "./weatherSlice";

export const getCurrentWeather = () => {
  return async (dispatch, getState) => {
    const location = getState().search.searchLocation.value;

    const [lat, long] = location.split(" ");

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8191de41855bd72c088f9ff66a69ef97&units=metric`
      );

      dispatch(weatherActions.addCurrentWeather(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getForcastWeather = () => {
  return async (dispatch, getState) => {
    const location = getState().search.searchLocation.value;

    const [lat, long] = location.split(" ");

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=8191de41855bd72c088f9ff66a69ef97&units=metric`
      );

      dispatch(weatherActions.addForcastWeather(response.data.list));

      console.log(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };
};
