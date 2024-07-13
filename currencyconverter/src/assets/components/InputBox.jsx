import {useState,useId} from 'react';

function InputBox({
    label,
    amount,
    onCurrencyChange,
    onAmountChange,
    currencyOptions=[],
    selectedCurrency="usd",
    currencyDisable=false,
    amountDisable=false,
    className=""

}){

    
    const amountInputId=useId()
    return (
        <div className={`flex justify-between bg-white w-2/3 p-5  border-green-300 border-2 rounded-md shadow-lg shadow-gray-700 `+{className}} >
            <div className="flex flex-col w-1/2 h-full ">
            <label htmlFor={amountInputId}>
                {label}
            </label>

            <input id={amountInputId} type="number" className="border-black border-1 outline-1 bg-transparent  w-full rounded-md h-1/2 p-5" value={amount} disabled={amountDisable} placeholder="amount"
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            > 


            </input>


            </div>

            <div>


                <select value={selectedCurrency} 
                disabled={currencyDisable}
                onChange={
                    (e)=>(onCurrencyChange && onCurrencyChange(e.target.value))
                }
            
                >
               {currencyOptions.map((currency)=>(
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
               ))

                }
                </select>
            </div>
           

        </div>
    )
}

export default InputBox;