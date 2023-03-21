import React from 'react'
import { useReducer } from 'react'
const initialstate={
    firstcounter:0
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstcounter:state.firstcounter+action.value}
        case 'decrement':
            return {firstcounter:state.firstcounter-action.value}
        case 'increment5':
            return {firstcounter:state.firstcounter+action.value}
        case 'decrement5':
            return {firstcounter:state.firstcounter-action.value}
       
        case 'reset':
            return initialstate
            
        default:
            return state    
    }
}
function Reducer3() {
    const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
    <h1>{count.firstcounter}</h1>
    <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
    <button  onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
    <button onClick={()=>dispatch({type:'increment5',value:5})}>Increment5</button>
    <button  onClick={()=>dispatch({type:'decrement5',value:5})}>Decrement5</button>
    <button  onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>
  
  )
}

export default Reducer3