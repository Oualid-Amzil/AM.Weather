import React from "react";

import { useDispatch } from "react-redux";
import { getCurrentWeather, getForcastWeather } from "./app/search-actions";

import BoxContainer from "./components/BoxContainer";
import hillImg from "./images/neom-YeLs9lJDx9M-unsplash.jpg";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  dispatch(getCurrentWeather());
  dispatch(getForcastWeather());

  return (
    <div
      className="App"
      style={{
        background: `url(${hillImg}) center no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div className="wrapper">
        <BoxContainer />
      </div>
    </div>
  );
}

export default App;
