import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchLocation: {
      value: "42.5 1.5",
      label: "Andora, AD",
    },
  },
  reducers: {
    addSearchLocation(state, action) {
      state.searchLocation = action.payload || state.searchLocation;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
