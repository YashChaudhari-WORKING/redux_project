import { configureStore } from "@reduxjs/toolkit";
import testFormatSlice from "@/features/testFormatSlice";
import testQuestionSlice from "@/features/testQuestionSlice";
export const store = configureStore({
  reducer: {
    category: testFormatSlice,
    question: testQuestionSlice,
  },
});
