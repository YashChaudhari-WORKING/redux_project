import { configureStore } from "@reduxjs/toolkit";
import testFormatSlice from "@/features/testFormatSlice";
export const store = configureStore({
  reducer: {
    category: testFormatSlice,
  },
});
