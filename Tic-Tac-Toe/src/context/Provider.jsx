import {React,useState} from 'react'
import { createContext } from 'react'

export const AccountContext=createContext(null)

function Provider({children}) {
    const [selectedO, setselectedO] = useState(false)
  return (
    <AccountContext.Provider value={{selectedO,setselectedO}}>
        {children}
    </AccountContext.Provider>
  )
}

export default Provider