import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import productCart from "../features/productCart";
const store = configureStore({
  reducer: {
    product: productSlice,
    cart: productCart,
  },
});

export default store;
