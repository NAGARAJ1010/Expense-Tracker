import axios from 'axios';
export const addNewUser = async (data)=>{
    const API_URL = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_REG_URL}`;
    const res = await axios.post(API_URL, data);
    return res;
}