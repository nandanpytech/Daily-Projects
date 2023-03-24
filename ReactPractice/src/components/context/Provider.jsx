import React from 'react'
import { createContext } from 'react'
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

export const AcountContext=createContext();
function Provider({children}) {
    const [count,dispatch]=useReducer(reducer,initialstate)
  return (
    <AcountContext.Provider value={{count,dispatch}}>
        {children}
    </AcountContext.Provider>
  )
}

export default Provider