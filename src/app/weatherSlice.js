import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "search",
  initialState: {
    current: {},
  },
  reducers: {
    addCurrentWeather(state, action) {
      state.current = action.payload || state.current;
    },
  },
});

export const weatherActions = weatherSlice.actions;

export default weatherSlice;
