import React from 'react'
import { useReducer } from 'react'
const initialstate=0

const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1 
        case 'reset':
            return initialstate
            
        default:
            return state    
    }
}
function Reducer1() {
    const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch('increment')}>Increment</button>
    <button  onClick={()=>dispatch('decrement')}>Decrement</button>
    <button  onClick={()=>dispatch('reset')}>Reset</button>
    </>
  
  )
}

export default Reducer1