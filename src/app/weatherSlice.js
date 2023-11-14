import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "search",
  initialState: {
    current: {},
    days: [],
  },
  reducers: {
    addCurrentWeather(state, action) {
      state.current = action.payload || state.current;
    },
    addForcastWeather(state, action) {
      state.days = action.payload || state.days;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice;
