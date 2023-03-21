import React from 'react'
import { useContext } from 'react'
import { AcountContext } from './Provider'


function Context2() {
    const {count,dispatch}=useContext(AcountContext)
    return (
      <button onClick={()=>dispatch("increment")}>increment</button>
    )
}

export default Context2