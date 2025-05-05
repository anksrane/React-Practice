import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice.js';
import modalReducer from '../features/modal/modalSlice.js';
// import postReducer from '../features/posts/postSlice.js';

const store = configureStore({
    reducer: {
        auth: authReducer,
        // posts: postReducer,
        modal: modalReducer,
    }
})

export default store;