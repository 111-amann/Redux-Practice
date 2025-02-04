import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/UserReducer";
import productSlice from "./reducers/ProductReducer";

export const store = configureStore({
  reducer: {
    userSlice: userSlice,
    productSlice: productSlice,
  },
});
export default store;
