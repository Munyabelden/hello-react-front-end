import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetingActions";

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  }
});

export default store;
