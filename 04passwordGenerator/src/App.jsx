import { useState,useEffect ,useCallback,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length,setLength]=useState(8) 
  const [isNumberAllowed,setIsNumberAllowed]=useState(false)
  const [isSpecialCharAllowed,setIsSpecialCharAllowed]=useState(true)

  const passwordGenerator=useCallback(()=>{

    let  pass=""
    
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz"
    if(isNumberAllowed)str+="0123456789"
    if(isSpecialCharAllowed)str+="():{}_-/><?*\\"
    for(let i=1;i<=length;i++){
      let pos=Math.floor(Math.random()*length+1)
      pass+=str.charAt(pos)

    }
    setPassword(pass)


  },[length,isNumberAllowed,isSpecialCharAllowed])

  useEffect(passwordGenerator,[isSpecialCharAllowed,isNumberAllowed,length])


  const passwordRef=useRef(null)
  const copyPasswordToClipboard=useCallback(()=>{

    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)

  },[password])
  

  return (
    <div className="p-4 bg-gray-500 rounded-md  w-full mx-auto max-w-md">
      <div className="flex  align-middle justify-center mb-4">
        <input className="bg-white rounded-md text-orange-400 p-2 align-middle  w-full"  type="text" value={password} placeholder="password" readOnly ref={passwordRef}>
          
        </input>
        <button className="bg-blue-600 rounded-md px-3 py-1.5 shrink-0" onClick={copyPasswordToClipboard} >Copy</button>


      </div>

      <div className="flex justify-evenly gap-1">
        <input type="range" min={8} max={100} onChange={(e)=>{setLength(e.target.value)}}></input>
        <label>length:{length}</label>

        <input type="checkbox" id="numberAllowed" defaultChecked={isNumberAllowed} onChange={()=>{setIsNumberAllowed((prev)=>!prev)}} ></input>
        

        <label htmlFor="numberAllowed"> Number: </label> 

        <input type="checkbox" id="isSpecialCharAllowed" defaultChecked={isSpecialCharAllowed}  onChange={()=>{setIsSpecialCharAllowed((prev)=>!prev)}} ></input>
        <label htmlFor="isSpecialCharAllowed" >SpacialChars</label>
        


      </div>
    </div>
  )
}

export default App
