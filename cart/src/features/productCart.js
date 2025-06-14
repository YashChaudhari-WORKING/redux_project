import { createSlice } from "@reduxjs/toolkit";

const productCart = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrize: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.products.find(
        (items) => items.id === newItem.id
      );
      if (!existingItem) {
        state.products.push({
          ...newItem,
          quantity: 1,
          totalPrize: newItem.prize,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.totalPrize += newItem.price;
      }
    },
  },
});
