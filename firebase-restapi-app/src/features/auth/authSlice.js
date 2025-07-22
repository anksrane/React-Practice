import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, logoutUserThunk } from './authThunks';

const initialState = {
    user: null,
    error: null,
    loading: false
};

const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser:(state, action)=>{
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUserThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginUserThunk.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        })
        .addCase(loginUserThunk.rejected,(state,action)=>{
            state.error = action.payload;
            state.loading = false;
        })
        .addCase(logoutUserThunk.pending, (state) => {
            state.user=null;
        })
    }
})

export const { setUser } = authSlice.actions;
export default authSlice.reducer;