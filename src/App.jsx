import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom';


function Input ({value, cb, placeholder}) {

  const setValue = (cb, value) => {
    if(value.length <= 1){
      cb(value);
    }
  }

  return (<input value={value} onChange={(e) => setValue(cb, e.target.value) } placeholder={placeholder}/>)
}

function App() {

  const navigate = useNavigate();

  const [d, setD] = useState("")
  const [u, setU] = useState("")
  const [a, setA] = useState("")
  const [l, setL] = useState("")
  const [e, setE] = useState("")
  const isValid = (d+u+a+l+e).toLowerCase() === "duale";

  if(isValid){
    window.location.href = 'https://hvilepust.com/tretoppiglo-ved-lardalselva/';
  }

  return <>
    <Input value={d} cb={setD} placeholder={"1"} />
    <Input value={u} cb={setU} placeholder={"2"} />
    <Input value={a} cb={setA} placeholder={"3"}/>
    <Input value={l} cb={setL} placeholder={"4"} />
    <Input value={e} cb={setE} placeholder={"5"}/>
   </>
}


export default App;
