import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Input ({value, cb, placeholder}) {

  const setValue = (cb, value) => {
    if(value.length <= 1){
      cb(value);
    }
  }

  return (<input value={value} onChange={(e) => setValue(cb, e.target.value) } placeholder={placeholder}/>)
}

function App() {
  const [d, setD] = useState("")
  const [u, setU] = useState("")
  const [a, setA] = useState("")
  const [l, setL] = useState("")
  const [e, setE] = useState("")
  const isValid = (d+u+a+l+e).toLowerCase() === "duale";

  return <>
    Vi skal til!
   </>
}


export default App;
