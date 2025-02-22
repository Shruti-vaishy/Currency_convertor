import { useState } from 'react'
import './App.css'
import useCurrencyConverter from './hooks/useCurrencyConverter'
import InputBox from './components/InputBox';

function App() {
 const [amount,setAmount]=useState();
 const [from,setFrom]=useState("usd");
 const [to,setTo]=useState("inr");
 const [calculatedamount,setCalculatedamount]=useState();
  const currency=useCurrencyConverter(from);
  const option=Object.keys(currency);
 function swap() {
  setFrom(to);
  setTo(from);
  setAmount(calculatedamount);
  setCalculatedamount(amount);
 }
const covert=()=>{

  setCalculatedamount(amount*currency[to]);
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://cdn.britannica.com/83/189283-131-4BB2C246/Banknotes-world.jpg')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                     covert()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOptions={option}
                          selectCurrency={from}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          onAmountChange={(amount)=>setAmount(amount)}
                      />
                          
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount={calculatedamount}
                          currencyOptions={option}
                          selectCurrency={to}
                          onCurrencyChange={(currency)=>setTo(currency)}
                          amountDisable
                      />
                  </div>
                  <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                  >
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
)

  
}

export default App
