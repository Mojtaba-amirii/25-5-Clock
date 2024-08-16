import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./clockSlice";

const store = configureStore({
  reducer: {
    clock: clockReducer,
  },
});

export default store;
