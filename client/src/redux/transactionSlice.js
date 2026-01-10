import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  transactionType: "expense",
  date: dayjs(),
  time: dayjs(),
  amount: 0,
  category: "",
  notes: "",
  tags: [],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactionField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetTransactionField: () => initialState,
  },
});

export const {
  setTransactionField,
  resetTransactionField,
  calculateFinancialSummary,
} = transactionSlice.actions;
export default transactionSlice.reducer;
