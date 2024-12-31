import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(5)
  // let counter = 5;

  const addValue =()=>{
    console.log("clicked"+ counter);
    // counter = counter +1;
    setcounter(prevCounter => prevCounter + 1);
    setcounter(prevCounter => prevCounter + 1);
    setcounter(prevCounter => prevCounter + 1);
    setcounter(prevCounter => prevCounter + 1);
  
  
  
  }

  const removeValue = ()=>{
    // counter = counter - 1;
    setcounter(prevCounter => prevCounter -1);
    setcounter(prevCounter => prevCounter -1);
    setcounter(prevCounter => prevCounter -1);
    setcounter(prevCounter => prevCounter -1);
  }
  return (
    <>
     <h1>Chai our react</h1>
     <h2>Counter Value {counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>remove Value {counter} </button>
    </>
  )
}

export default App
