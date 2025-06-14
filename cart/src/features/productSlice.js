import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          (state.data = action.payload);
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});
export default productSlice.reducer;
