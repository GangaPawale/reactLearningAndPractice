import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './assets/context/TodoContext'
import TodoForm from './assets/components/TodoForm'
import Todo from './assets/components/Todo'
 
function App() {
  
  const [todos, setTodos] = useState([])
   
  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  
  const updateTodo=(id,todotxt)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todotxt:prevTodo)))
    // setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

  }

  const removeTodo=(id)=>{
    setTodos((prev)=>(prev.filter((prevTodo)=>(prevTodo.id!==id))))
  }

  const toggleComplete=(id)=>{
    setTodos((prev)=>(prev.map((prevTodo)=>(prevTodo.id===id?{...prevTodo,complete:!prevTodo.complete}:prevTodo))))
  }

  useEffect(()=>{
   const todos=JSON.parse(localStorage.getItem('todos'))
   if(todos && todos.length>0) setTodos(todos)
   
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  

  return (
    <TodoProvider value={{todos,addTodo,removeTodo,updateTodo,toggleComplete}}>
      <h1 className='bg-purple-400 p-4 rounded-md'>
        Manage your todo here
      </h1>
      <div>
        <p  className='bg-slate-500 rounded-lg p-2'
        >Todo form here</p>
        <TodoForm/>

      </div>
      <div>
        <p>
        Your todos list
        </p>
        {
          (!todos || todos.length<1)?"":todos.map((todo)=>(<Todo todo={todo}/>))
        }
         
        
        
        
       </div>
    </TodoProvider>
    
  )
}

export default App
