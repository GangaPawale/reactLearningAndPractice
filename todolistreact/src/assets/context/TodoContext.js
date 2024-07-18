import React from 'react'

const TodoContext=React.createContext({
    todos:[{
        id:1,
        todo:'todo msg',
        complete:false
    }],
    addTodo:(todo)=>{ },
    removeTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{}


})

export default TodoContext



export const useTodo=()=>{
    return React.useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider

