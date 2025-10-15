import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMenuOpen:false,
}

const menuSlice=createSlice({
    name:"menuMobile",
    initialState,
    reducers: {
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        setMenu:(state, action)=>{
            state.isMenuOpen = action.payload;
        },
    },
});

export const { toggleMenu, setMenu } = menuSlice.actions;
export default menuSlice.reducer;