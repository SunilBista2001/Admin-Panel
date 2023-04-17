import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payment: null,
};
const PaymentSlice = createSlice({
  name: "payement",
  initialState,
  reducers: {
    setPayment: (state, action) => {
      state.payment = action.payload;
    },
  },
});

export const { setPayment } = PaymentSlice.actions;
export default PaymentSlice.reducer;
