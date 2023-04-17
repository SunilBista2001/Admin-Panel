import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import PaymentSlice from "./slices/PaymentSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    payment: PaymentSlice,
  },
});
