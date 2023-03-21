import React from 'react'
import { useContext } from 'react'
import { AcountContext } from './Provider'


function Context1() {
    const {count,dispatch}=useContext(AcountContext)
  return (
    <button onClick={()=>dispatch("increment")}>{count}</button>
  )
}

export default Context1