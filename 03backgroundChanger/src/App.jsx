import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  

  return (
      <div className="w-full h-screen  " style={{backgroundColor:color}}> 

      <div className="p-5 gap-2 flex  bg-gray-500  ">
        
        <button className="bg-red-700 p-3 rounded-lg w-20" onClick={()=>setColor("red") }>Red</button>
        <button className="bg-green-700 p-3 rounded-lg w-20" onClick={()=>setColor("green") }>Green</button> 
        <button className="bg-black p-3 rounded-lg w-20 text-white" onClick={()=>setColor("black") }>Black</button> 
        <button className="bg-yellow-500 p-3 rounded-lg w-20" onClick={()=>setColor("yellow") }>Yellow</button> 
        <button className="bg-pink-700 p-3 rounded-lg w-20" onClick={()=>setColor("pink") }>Pink</button> 
        <button className="bg-white p-3 rounded-lg w-20" onClick={()=>setColor("white") }>White</button> 
        <button className="bg-purple-700 p-3 rounded-lg w-20" onClick={()=>setColor("purple") }>Purple</button> 

        





        
      </div>
      </div>
      

    
  )
}

export default App
