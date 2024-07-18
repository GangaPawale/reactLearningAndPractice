import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import {removeTodo} from '../../features/todo/todoSlice'

function TodoList(){
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    



    return (
        <>
        <div>
        </div>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <div>{todo.text}</div>
                    <button
                    onClick={()=>dispatch(removeTodo(todo.id))}
                    >❌</button>

                </li>
            ))}
        </ul>
        </>
    )


}

export default TodoList