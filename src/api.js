import axios from "axios";

export const geoApiInstance = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "X-RapidAPI-Key": "14ce4ad3f9mshc6e5d936328c314p170df4jsnb64dfd66202a",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});

export const openWeatherApiInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  headers: {
    appid: "8191de41855bd72c088f9ff66a69ef97",
    "X-Custom-Header": "foobar",
  },
});

// export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
// export const WEATHER_API_KEY = "8191de41855bd72c088f9ff66a69ef97";
