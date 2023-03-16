import React,{useState} from 'react'
import "./Counterapplication/count.css"

const App = () => {
  let[count,setCount]=useState(0)
  let handleIncrement=()=>{
   setCount(count+1)
  }
  let handleDecrement=()=>{
    setCount(count-1)
  }
  let handleReset=()=>{
    setCount(0)
  }
   return (
    <div className='num'>
      <h1>{count}</h1>
      <div className='btn'>
        <button onClick={handleIncrement}>+ increment</button>
        <button onClick={handleDecrement}>- decrement</button>
        <button onClick={handleReset}>RESET</button>
      </div>
    </div>
  )
}

export default App