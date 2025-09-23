import * as React from 'react';
import '../css/transaction.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransactionField } from '../redux/transactionSlice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
const TransactionPage = ()=>{
    const[selectedType , setSelectedType] = useState('expense');
    const dispatch = useDispatch();

    const handleToggle = (e) => {
        const {name} = e.nativeEvent.target.attributes;
        setSelectedType(prev => prev == 'expense' ? 'income' : 'expense');
        const typeContainer = document.querySelector('.type-container');
        typeContainer.classList.toggle('toggle');
        dispatch(setTransactionField({field: name.nodeValue, value: selectedType}));
    };
    return (
      <div className="transaction-container p-4">
        <div className=" p-1 rounded-4xl border-2 border-(--primary-color)">
          <div className="type-container relative z-10 flex justify-between bg-(--input-bg-color) rounded-4xl">
            <div
              className={`${selectedType == "expense" ? "text-white" : ""}`}
              name="transactionType"
              value="expense"
              onClick={handleToggle}
            >
              expense
            </div>
            <div
              className={`${selectedType == "income" ? "text-white" : ""}`}
              name="transactionType"
              value="income"
              onClick={handleToggle}
            >
              income
            </div>
          </div>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs("2022-04-17")} />
        </LocalizationProvider>
      </div>
    );
}

export default TransactionPage;