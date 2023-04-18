import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import PaymentSlice from "./slices/PaymentSlice";
import QuestionSlice from "./slices/QuestionSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    payment: PaymentSlice,
    question: QuestionSlice,
  },
});
