import React from 'react'
import { useEffect,useState } from 'react'

function CounterIncrease() {
    const [count, setcount] = useState(0)

       useEffect(() => {
        const id=setInterval(() => {
            setcount((count+1))
        }, 1000);

        return()=>{
            clearInterval(id)
        }
       },)
       

  return (
    <div>{count}</div>
  )
}

export default CounterIncrease