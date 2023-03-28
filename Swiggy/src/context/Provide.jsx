import {React} from 'react'
import { createContext,useState } from 'react'
export const FoodContext = createContext(null)

function Provide({children}) {
    const [allRestaurant, setallRestaurant] = useState([])
  return (
    <>
    <FoodContext.Provider value={{setallRestaurant,allRestaurant}}>
        {children}
    </FoodContext.Provider>
    
    </>
  )
}

export default Provide