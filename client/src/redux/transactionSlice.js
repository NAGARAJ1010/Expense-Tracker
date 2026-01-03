import {createSlice} from '@reduxjs/toolkit'
import dayjs from 'dayjs';

const initialState = {
  transactionType: "",
  date: dayjs(),
  time: dayjs(),
  amount: "",
  category: "",
  notes: "",
  tags: [],
};

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers:{
        setTransactionField: (state, action)=>{
            const {field, value} = action.payload;
            state[field] = value;
        },
        resetTransactionField: ()=> initialState
    }
});

export const{setTransactionField, resetTransactionField} = transactionSlice.actions;
export default transactionSlice.reducer;