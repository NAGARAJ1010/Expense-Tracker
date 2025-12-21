import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
};
const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
        setRegisterField: (state, action)=>{
            const {field, value} = action.payload;
            state[field] = value;
        },
        resetRegister: ()=> initialState,
    }
});

export const {setRegisterField, resetRegister} = registerSlice.actions;
export default registerSlice.reducer;