import {React, useState} from 'react'
import { createContext } from 'react'
export const FoodContext = createContext(null)

function Provide({children}) {
  const [ParticularRes, setParticularRes] = useState([])
  return (
    <>
    <FoodContext.Provider value={{ParticularRes,setParticularRes}}>
        {children}
    </FoodContext.Provider>
    
    </>
  )
}

export default Provide