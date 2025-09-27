import * as React from 'react';
import '../css/transaction.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTransactionField } from '../redux/transactionSlice';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';
import { faArrowLeft, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryIcon from '../components/CategoryIcon';
import {gsap} from 'gsap';
const TransactionPage = ()=>{
    const categories = ['food','shopping','entertainment','medical','travel','investment','others'];
    const[selectedType , setSelectedType] = useState('expense');
    const dispatch = useDispatch();
    const {category} = useSelector(state => state.transaction);

    const handleTransactionData = (fieldName , value)=>{
      dispatch(setTransactionField({field : fieldName, value}));
    }

    const handleToggle = (e) => {
        const {name} = e.nativeEvent.target.attributes;
        setSelectedType(prev => prev == 'expense' ? 'income' : 'expense');
        const typeContainer = document.querySelector('.type-container');
        typeContainer.classList.toggle('toggle');
        dispatch(setTransactionField({field: name.nodeValue, value: selectedType}));
    };
    return (
      <div className="transaction-container px-4 py-8 flex flex-col gap-5 lg:gap-8 max-w-[80rem] m-auto">
        <div className='transaction__heading flex gap-2 items-center'>
          <div className='w-6 h-6'>
            <FontAwesomeIcon icon={faArrowLeft} className='w-full h-full'/>
          </div>
          <p className='capitalize text-2xl font-medium select-none'>add transactions</p>
        </div>
        <div className=" p-1 rounded-4xl border-2 border-(--primary-color) lg:m-auto">
          <div className="type-container relative z-10 flex justify-between bg-(--input-bg-color) rounded-4xl lg:w-[40rem]">
            <div
              className={`${selectedType == "expense" ? "text-white" : ""} cursor-pointer`}
              name="transactionType"
              value="expense"
              onClick={handleToggle}
            >
              expense
            </div>
            <div
              className={`${selectedType == "income" ? "text-white" : ""} cursor-pointer`}
              name="transactionType"
              value="income"
              onClick={handleToggle}
            >
              income
            </div>
          </div>
        </div>
        <div className='amount-time-container gap-5 flex flex-col lg:flex-row-reverse'>
          <div className='date-time-wrapper lg:w-1/2'>
            <p className='input-heading'>time & date</p>
            <div className='date-time-container flex justify-between gap-2 lg:items-end'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker defaultValue={dayjs("2022-04-17")} />
                <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
              </LocalizationProvider>
            </div>
          </div>
          <div className='amount-wrapper flex items-end justify-between w-full lg:w-1/2'>
            <div className='amount-container'>
              <label htmlFor="amount" className='block input-heading'>amount</label>
              <input type="text" placeholder='0' id='amount' className='outline-0 text-3xl w-full placeholder:text-(--input-value-color) placeholder:opacity-70' />
            </div>
            <div className='w-7 h-7 mb-1'>
              <FontAwesomeIcon icon={faIndianRupeeSign} className='text-(--primary-color)'/>
            </div>
          </div>
        </div>
        <div className='category-notes-container flex flex-col lg:flex-row gap-5'>
          <div className='category-wrapper lg:w-1/2'>
            <p className='mb-2 input-heading'>categories</p>
            <div className='category-container grid grid-cols-3 md:grid-cols-4 gap-3'>
            {
              categories.map((category, index)=>{
                return(
                  <CategoryIcon key={index} handleCategory={handleTransactionData} categoryName={category} type='card' />
                )
              })
            }  
            </div>
          </div>
          <div className='flex flex-col gap-2 lg:w-1/2'>
            <div className='notes-container'>
              <p className='mb-2 input-heading'>Notes</p>
              <textarea name="notes" id="notes" className='p-2 border border-(--primary-color) outline-0 rounded-md w-full max-h-25 min-h-24 text-sm'></textarea>
            </div>
            <div className='tag-container'>
              <label htmlFor="tag" className='input-heading'>tags</label>
              <div className='input-container mt-2 flex gap-4'>
                <input type="text" id='tag' className='p-2 border border-(--primary-color) outline-0 rounded-md w-full'/>
                <button className='capitalize bg-(--secondary-color) rounded-md px-4 py-2 text-white text-2xl'>+</button>
              </div>
              <div className='flex gap-1.5 mt-2'>
                <p className='p-1 rounded-md bg-(--contrast-color) text-sm text-white text-center align-middle tracking-wider flex items-center'><span>#</span>pg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default TransactionPage;