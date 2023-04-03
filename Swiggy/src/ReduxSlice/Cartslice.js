import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        CartItems:[],
        RestaurantDetils:[]
    },
    reducers:{
        addItem:(state,action)=>{
            const orderedItem=action.payload.OrderedItem
            state.CartItems.push(orderedItem)
        }
    }
})

export default cartslice.reducer
export const {addItem}=cartslice.actions