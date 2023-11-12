import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import weatherSlice from "./weatherSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    weather: weatherSlice.reducer,
  },
});
