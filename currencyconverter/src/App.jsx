import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './assets/components/InputBox'
import useCurrencyInfo from './assets/hooks/useCurrecyInfo'

function App() {
  const [from, setFrom] = useState('usd')
  const [to,setTo]=useState('inr')
  const [amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState(0)

  // const [options,setOptions]=useState(0)

  const swap=()=>{
    
    setFrom(to)
    setTo(from)
    // temp=convertedAmount
    setAmount(convertedAmount)
    setConvertedAmount(amount)

  }

  const currencyInfo=useCurrencyInfo(from)
  console.log(currencyInfo)

  const options=Object.keys(currencyInfo)

  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }


  return (
    <div className="b-2 bg-gray-400  w-3/4 h-3/4 rounded-md  flex flex-col justify-evenly items-center  "> 
      

     <form className="w-full h-full flex flex-col items-center justify-center gap-3" onSubmit={(e)=>{
      e.preventDefault()
      convert()
     }}>
     <InputBox 
     label="From"
     amount={amount}
     currencyOptions={options}
     selectedCurrency={from}
     onCurrencyChange={(currency)=>setFrom(currency)}
     onAmountChange={(amount)=>setAmount(amount)}
     
     
     />
      <button className="py-3 px-5 bg-blue-600 rounded-lg text-white text-xl" onClick={()=>{swap()}}>swap</button>
      <InputBox
      label="TO"
      amount={convertedAmount}
      currencyOptions={options}
      selectedCurrency={to}
      onCurrencyChange={(currency)=>{setTo(currency);convert()}}
      // onAmountChange={(amount)=>setAmount(amount)}

      
      />
      <button  type="submit" className="py-3 px-5 bg-blue-600 rounded-lg text-white text-xl"  >
      convert {from} to {to}
      </button>

     </form>
    </div>

    
  )
}

export default App
