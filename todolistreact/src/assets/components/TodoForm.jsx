import React from 'react'
import {useTodo} from '../context/TodoContext'



function TodoForm(){
    const [todo,setTodo]=React.useState('')
    // const [todos,setTodos]=React.useState([])
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo)return
        addTodo({todo,completed:false})
        setTodo('')
    }

    return(
        <>
        <div className='p-4 w-1/2 m-auto rounded-md' style={
            {backgroundColor:'#8697c3'}
        }
        >Add todo here </div>
        <input
        className='bg-transparent p-2 my-4 bg-lime-700  rounded-l-lg'
        type='text'
        onClick={add}
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}


        />
        <button className=' p-2 my-4 bg-blue-700 rounded-r-md '
        onClick={(e)=>add(e)}
        >
            ADD 
        </button>
        </>
    )


}

export default TodoForm