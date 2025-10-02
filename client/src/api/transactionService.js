import axios from 'axios';
import api from './api';

export const addTransaction = async(data)=>{
    const API_URL = `${import.meta.env.VITE_BASE_URL}/transaction/addTransaction`;
    const result = await axios.post(API_URL, data);
    return result;
}

export const getTransactions= async()=>{
    const result = await api.get(`/transaction/getTransaction`);
    return result;
}

export const getTransactionById = async(transactionId)=>{
    const result = await api.get(`/transaction/getTransaction/${transactionId}`);
    return result;
}

export const updateTransaction = async(transactionId)=>{
    const result = await api.put(`/transaction/updateTransaction/${transactionId}`);
    return result;
}