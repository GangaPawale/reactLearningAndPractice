import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github,{gitHubInfoLoader} from './components/Github/Github.jsx'
import {BrowserRouter, RouterProvider,createBrowserRouter} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter(
    [
     { path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:'about',
          element:<About/>

        },
        {
          path:'contact',
          element:<Contact/>

        },
        {
          path:'user/:userid',
          element:<User/>
        },
        {
          loader:{gitHubInfoLoader},
          path:'github',
          element:<Github/>,
          
          
          
        }

      ]
    
   }]
  )
  return (
   /* this fucking rascal BrowsertRouter hac taken lot time of mine to resolve bug ,Becauses i hadn`t wrap header with BrowserRouter and I had NavLInk in my header so may be if you have any react-router-dom component then you should wrap it with BrowserRouter   */
   

   <RouterProvider router={router}>
    
   </RouterProvider>

  
  )
}

export default App
