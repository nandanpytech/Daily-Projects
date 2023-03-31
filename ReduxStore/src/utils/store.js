import {configureStore} from '@reduxjs/toolkit'
import cartslice from '../slice'
const store=configureStore({
    reducer:{
        cart:cartslice
    }
})

export default store

