import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWhether = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WAPI}&q=${city}&aqi=yes`
    );
    return res.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    loading: false,
    error: null,
    markedCity: [],
  },
  reducers: {
    addCity: (state, action) => {
      if (!state.markedCity.includes(action.payload)) {
        state.markedCity.push(action.payload);
      } else {
        state.markedCity = state.markedCity.filter(
          (city) => city !== action.payload
        );
      }
    },
    removeCity: (state, action) => {
      state.markedCity = state.markedCity.filter(
        (city) => city !== action.payload
      );
    },
    clearCity: (state) => {
      state.markedCity = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWhether.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchWhether.fulfilled, (state, action) => {
        (state.loading = false), (state.data = action.payload);
      })
      .addCase(fetchWhether.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { addCity, removeCity, clearCity } = weatherSlice.actions;
export default weatherSlice.reducer;
