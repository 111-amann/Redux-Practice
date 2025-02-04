import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
});
export default store;

