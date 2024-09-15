import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/index";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
