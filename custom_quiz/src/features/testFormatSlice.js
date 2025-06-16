import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const res = await axios.get("https://opentdb.com/api_category.php");
    return res.data.trivia_categories;
  }
);

const testFormatSlice = createSlice({
  name: "format",
  initialState: {
    category: [],
    loading: false,
    error: null,
    createdTest: [],
  },
  reducers: {
    createTest: (state, action) => {
      const id = Date.now();
      state.createdTest.push({ ...action.payload, id });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});
export const { createTest } = testFormatSlice.actions;
export default testFormatSlice.reducer;
