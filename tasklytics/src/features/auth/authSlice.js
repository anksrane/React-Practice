import { createSlice } from '@reduxjs/toolkit';
import { login as firebaseLogin, logout as firebaseLogout, onAuthChange } from '../../firebase/authService';

const initialState = {
    user: null,
    loading: false,
    error: null
}

const authSlice=createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading:(state, action) =>{
            state.loading = action.payload
        },
        setUser:(state,action) =>{
            state.user = action.payload
            state.error=null;
        },
        setError:(state,action) =>{
            state.error = action.payload
        },
        clearUser:(state)=>{
            state.user=null;
            state.error=null;
        }
    }
})