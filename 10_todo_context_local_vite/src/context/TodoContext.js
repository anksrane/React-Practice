import {createContext, useContext} from 'react';

export const TodoContext=createContext({
    // data format
    todos:[
        {id:1,todo:"Task 1",complted:false},
    ],
    // Functionality Names
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider