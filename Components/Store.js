import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navReducer";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
