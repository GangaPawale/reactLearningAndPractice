import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './assets/components/User'
import Profile from './assets/components/Profile'
import UserContextProvider from './assets/context/ContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <UserContextProvider >
     <h1>Profile and user elementts in app</h1>
     <User/>
     <Profile/>
    </UserContextProvider>
  
  )
}

export default App
