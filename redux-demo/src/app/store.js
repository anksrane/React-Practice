import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feature/counter/counterSlice';

export const store=configureStore({
    reducer:{
        // Combine all your reducers here
        counter:counterReducer
    }
})