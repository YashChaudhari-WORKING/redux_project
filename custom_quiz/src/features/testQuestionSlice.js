import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uid } from "uuid";
const shuffle = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const fetchQuestion = createAsyncThunk(
  "question/fetchQuestion",
  async () => {
    const res = await axios.get(
      "https://opentdb.com/api.php?amount=15&category=15&difficulty=medium&type=multiple"
    );

    const processedData = res.data.results.map((que) => {
      const shuffledArray = shuffle([
        ...que.incorrect_answers,
        que.correct_answer,
      ]);
      return {
        id: uid(),
        question: que.question,
        answers: shuffledArray,
        correct_answer: que.correct_answer,
      };
    });

    return processedData;
  }
);

const testQuestionSlice = createSlice({
  name: "question",
  initialState: {
    questionData: [], // Stores fetched quiz questions
    loading: false, // Tracks API request status
    error: null, // Stores any errors from API calls

    currentQuestionIndex: 0, // Tracks the current question
    selectedAnswers: [], // Stores user-selected answers per question
    score: 0, // Tracks user score
    quizCompleted: false, // Marks quiz completion
    timer: null, // Optional: If using a timer per question or quiz
  },
  reducers: {
    changeQuestion: (state, action) => {
      const changeAction = action.payload;
      switch (changeAction) {
        case "next":
          if (state.currentQuestionIndex < state.questionData.length - 1)
            state.currentQuestionIndex += 1;
          break;
        case "previous":
          if (state.currentQuestionIndex > 0) state.currentQuestionIndex -= 1;
          break;
        default:
          break;
      }
    },
    setAnswers: (state, action) => {
      const { id, answers } = action.payload;
      const correctAns = state.questionData.find(
        (ans) => ans.id === id
      )?.correct_answer;
      const existingAnswerIndex = state.selectedAnswers.findIndex(
        (ans) => ans.id === id
      );
      if (existingAnswerIndex === -1) {
        state.selectedAnswers.push({ id, answers });

        if (correctAns === answers) {
          state.score += 1;
        }
      } else {
        const prevAns = state.selectedAnswers[existingAnswerIndex].answers;
        state.selectedAnswers[existingAnswerIndex].answers = answers;
        const isprevCorrect = prevAns === correctAns;
        const currentAnsCorrect = answers === correctAns;
        if (!isprevCorrect && currentAnsCorrect) {
          state.score += 1;
        } else if (isprevCorrect && !currentAnsCorrect) {
          state.score -= 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestion.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.questionData = action.payload;
      })
      .addCase(fetchQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { changeQuestion, setAnswers } = testQuestionSlice.actions;
export default testQuestionSlice.reducer;
