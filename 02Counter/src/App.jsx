import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter, setCounter] = useState(5)

  //let counter = 5

  const addValue = () => {
    console.log("clicked", counter);
   counter = counter + 1
  }
  return (
    <>
     <h1>Krishna Bahadur Thapa</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addValue}>Add Value{counter}</button>
     <br/>
     <button>Remove value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
