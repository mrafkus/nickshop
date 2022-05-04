import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./states/auth/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer
  }
});
