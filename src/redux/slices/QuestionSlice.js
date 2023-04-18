import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: null,
};
const QuestionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

export const { setQuestion } = QuestionSlice.actions;
export default QuestionSlice.reducer;
