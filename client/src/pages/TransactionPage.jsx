import * as React from 'react';
import '../css/transaction.css';
import { useState, useEffect } from "react";
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
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';
import { addTransaction, updateTransaction } from "../api/transactionService";
const TransactionPage = ()=>{
    const categories = ['food','shopping','entertainment','medical','travel','investment','others'];
    const[selectedType , setSelectedType] = useState('expense');
    const[inputTag,setInputTag] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const {transactionType, date, time, amount, notes, tags} = useSelector(state => state.transaction);

    useEffect(()=>{
      if(transactionType){
        setSelectedType(transactionType);
        const typeContainer = document.querySelector('.type-container');
        typeContainer.classList.toggle('toggle');
      }
    },[])

    const handleTransactionData = (fieldName , value)=>{
      dispatch(setTransactionField({field : fieldName, value: value}));
    }

    const handleTags = ()=>{
      const tagInput = document.querySelector('#tag');
      const trimmedValue = tagInput.value.trim();
      tagInput.value = '';
      tagInput.focus();
      if(trimmedValue){
        setInputTag((prev) => {
          const updated = [...prev, trimmedValue];
          return updated;
        });
      }
    }

    const handleToggle = (e) => {
        const {name} = e.nativeEvent.target.attributes;
        setSelectedType(prev => prev == 'expense' ? 'income' : 'expense');
        const typeContainer = document.querySelector('.type-container');
        typeContainer.classList.toggle('toggle');
        handleTransactionData(name.nodeValue, selectedType);
    };

    const handleSubmit = async()=>{
      try {
        if(id){
          const result = await updateTransaction(
            { transactionType, date, time, amount, category, notes, tags }
          )
        }
        else {
          const result = await addTransaction(
            { transactionType, date, time, amount, category, notes, tags }
          )
        }
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    return (
      <div className="transaction-container overflow-y-scroll relative px-4 pt-8 pb-20 flex flex-col gap-5 lg:gap-8 max-w-[80rem] m-auto">
        <div className='transaction__heading flex gap-2 items-center' onClick={()=>navigate('/dashboard')}>
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
                <DatePicker name='date' defaultValue={date ? date : dayjs()} onChange={(newDate)=> handleTransactionData('date', newDate ? newDate.format("DD-MM-YYYY") : date.format("DD-MM-YYYY"))}/>
                <TimePicker name='time' defaultValue={date ? date : dayjs()} onChange={(newTime)=>handleTransactionData('time', newTime ? newTime.format("hh:mm A") : time.format("hh:mm A"))}/>
              </LocalizationProvider>
            </div>
          </div>
          <div className='amount-wrapper flex items-end justify-between w-full lg:w-1/2'>
            <div className='amount-container'>
              <label htmlFor="amount" className='block input-heading'>amount</label>
              <input type="number" value={amount} placeholder='0' id='amount' className='outline-0 text-3xl w-full placeholder:text-(--input-value-color) placeholder:opacity-70' onChange={(e)=>handleTransactionData('amount', e.target.value)}/>
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
              <textarea value={notes} name="notes" id="notes" className='p-2 border border-(--primary-color) outline-0 rounded-md w-full max-h-25 min-h-24 text-sm' onChange={(e)=>handleTransactionData('notes',e.target.value)}></textarea>
            </div>
            <div className='tag-container'>
              <label htmlFor="tag" className='input-heading'>tags</label>
              <div className='input-container mt-2 flex gap-4'>
                <input type="text" id='tag' className='p-2 border border-(--primary-color) outline-0 rounded-md w-full'/>
                <button className='capitalize bg-(--secondary-color) rounded-md px-4 py-2 text-white text-2xl' onClick={handleTags}>+</button>
              </div>
              <div className='flex flex-wrap gap-1.5 mt-2'>
                {
                  inputTag.map((tag, index)=>{
                      return (
                        <p
                          key={index}
                          className="p-1 rounded-md bg-(--contrast-color) text-sm text-white text-center align-middle tracking-wider flex items-center"
                        >
                          <span>#</span>
                          {tag}
                          <span
                            data-index={index}
                            className="ml-2 mr-1"
                            onClick={(e) => {
                              const idx = Number(e.target.dataset.index);
                              setInputTag((prev) =>
                                prev.filter((_, i) => i !== idx)
                              );
                            }}
                          >
                            X
                          </span>
                        </p>
                      );
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className={`fixed bottom-4 left-5/12 md:left-[45%] lg:left-[46%] xl:left-[47.5%] z-10 w-20 h-20 bg-(--primary-color) rounded-full p-4 shadow-md shadow-gray-600`} onClick={handleSubmit}>
          <FontAwesomeIcon icon={faFloppyDisk} className='turn-white'/>
        </div>
      </div>
    );
}

export default TransactionPage;