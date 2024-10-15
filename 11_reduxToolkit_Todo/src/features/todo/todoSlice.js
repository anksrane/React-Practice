import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello World"}]
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        // updateTodo: (state, action) => {
        //     // Find the todo that matches the id in the action payload
        //     const todo = state.todos.find(todo => todo.id === action.payload.id);
            
        //     // If the todo is found, update its properties
        //     if (todo) {
        //         todo.text = action.payload.text !== undefined ? action.payload.text : todo.text;
        //         todo.completed = action.payload.completed !== undefined ? action.payload.completed : todo.completed;
        //     }
        // }        
    }
})

// Export Individual Reducers Methods
export const {addTodo,removeTodo}=todoSlice.actions

// Export complete reducers
export default todoSlice.reducer