import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count =5;
  /// value can be channge or update by this functions but does not update in ui 
  ///react controlls the updation in ui ,so we need to use useState hook
  // function addCount(){

  //   console.log('clicked',Math.random())
  //   count+=1
  //   console.log(count)
  // }

  // function removeCount(){
  //   console.log('clicked',Math.random())
  //   count-=1
  //   console.log(count)
  // }

  let [count,setCount]=useState(5)

  const addCount=()=>{
    setCount(count+1)
    console.log(count)
  }

  const removeCount=()=>{
    setCount(count-1)
    console.log(count)
  }

  return (
    <>
      <h1>Ganga And Prasad</h1>    
      <h2>current counter:{count}</h2> 
      <button onClick= {addCount} >add counter {count}</button>
    <br/>
      <button onClick={removeCount} >remove value {count}</button>

      <footer>footer: {count}</footer>




    </>
  )
}

export default App
