import React from 'react'
import {useTodo} from '../context/TodoContext'

function Todo({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false)
    const [todoMsg, setTodoMsg] = React.useState(todo.todo)
    const { updateTodo, removeTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        console.log("here i in edittodo")
       
        updateTodo(todo.id, {...todo,todo:todoMsg })
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)

    }

    return (
        

            <div key={todo.id}
            className='p-3 rounded-lg w-full my-3 '
            style={{backgroundColor:`#EEE7F6`}}
            >
                <input
                    
                    type='checkbox'
                    className='w-7 h-7 my-auto '
                    checked={todo.toggleComplete}
                    onChange={toggleCompleted}
                />
                <input
                    type='text'
                    className={
                         
                        `w-4/5 p-2 text-2xl  rounded-md  ${todo.complete? 'line-through bg-orange-900 '  : 'bg-green-500' }`
                       
                    }
                    value={todo.todo}
                    readOnly={!isTodoEditable}
                    onChange={(e) => { setTodoMsg(e.target.value) }}
                />
                <button
                    className='p-2 bg-purple-500'
                    onClick={() => {
                        if (todo.complete) return
                        if (isTodoEditable) {
                            editTodo()
                        }  
                        setIsTodoEditable((prev)=>(!prev))


                    }}

                    disabled={todo.complete}
                >{isTodoEditable?`📁`:`✏️`}</button>

                <button
                    className='p-2 bg-yellow-500'
                    onClick={() => {
                        removeTodo(todo.id)
                    }
                    }
                >
                    ❌
                </button>




            </div>




    


    )
}


export default Todo