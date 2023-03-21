import {React,useState,useEffect} from 'react'
import Memo2 from './Memo2';

function Memo1() {
    const [name, setname] = useState()

    useEffect(() => {
      setInterval(() => {
        setname("nandna")
      }, 1000);
    },)
    
  return (
    <Memo2 name={name}/>
  )
}

export default Memo1