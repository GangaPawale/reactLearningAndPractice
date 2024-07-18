import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './assets/components/AddTodo'
import TodoList from './assets/components/TodoList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1>Learn redux with todo list </h1>
   <AddTodo/>
   <TodoList/>
    </>
  )
}

export default App
