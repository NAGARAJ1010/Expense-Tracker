import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './registerSlice';
import transactionReducer from './transactionSlice';

export const store = configureStore({
    reducer:{
        register: registerReducer,
        transaction: transactionReducer,
    },
});

export default store;