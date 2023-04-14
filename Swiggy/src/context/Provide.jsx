import {React, useState} from 'react'
import { createContext } from 'react'
export const FoodContext = createContext(null)

function Provide({children}) {
  const [ParticularRes, setParticularRes] = useState([])
  const [isdraweropen, setisdraweropen] = useState(false)
  const [inputdata, setinputdata] = useState()


  return (
    <>
    <FoodContext.Provider value={{ParticularRes,setParticularRes,isdraweropen,setisdraweropen,inputdata,setinputdata}}>
        {children}
    </FoodContext.Provider>
    
    </>
  )
}

export default Provide