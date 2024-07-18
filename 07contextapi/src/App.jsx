import { useState } from 'react'
import User from './assets/components/User.jsx'
import Profile from './assets/components/Profile.jsx'
import UserContextProvider from './assets/components/UserContextProvider.jsx'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  

  return (
  <UserContextProvider >
    <h1 className='b'
    >LEt it done 

    </h1>
    <User/>
    <Profile/>
  </UserContextProvider>
      
  )
}

export default App
