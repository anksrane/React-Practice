import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
};

const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        // Reducer functions directly modify the state (Immer handles immutability)
        increment:state=>{
            state.value+=1;
        },
        decrement:state=>{
            state.value-=1;
            if(state.value<0){
                alert("Value Can't Be Negative")
            }            
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        },
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount }= counterSlice.actions;

export default counterSlice.reducer;        // The reducer for this slice