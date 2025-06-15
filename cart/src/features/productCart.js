import { createSlice } from "@reduxjs/toolkit";
const productCart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItem: 0,
    totalPrize: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItems = state.items.find((p) => p.id === newItem.id);
      state.totalQuantity += 1;
      if (!existingItems) {
        state.items.push({
          ...newItem,
          quantity: 1,
          itemTotalPrize: newItem.price,
        });
      } else {
        existingItems.quantity += 1;
        existingItems.itemTotalPrize += newItem.price;
      }
      state.totalPrize = state.items.reduce(
        (acc, item) => acc + item.itemTotalPrize,
        0
      );
    },
    removeItem: (state, action) => {
      const id = action.payload;

      const existingItems = state.items.find((p) => p.id === id);
      if (!existingItems) return;
      existingItems.itemTotalPrize -= existingItems.price;
      existingItems.quantity -= 1;
      state.totalItem -= 1;
      state.totalPrize -= existingItems.price;
      if (existingItems.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
      state.totalItem = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = productCart.actions;
export default productCart.reducer;
