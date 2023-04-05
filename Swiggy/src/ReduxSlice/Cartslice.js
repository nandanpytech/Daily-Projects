import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        CartItems:{RestaurantDetails:[],ResturantOrderedItems:[]},
    },
    reducers:{
        addItem:(state,action)=>{
            const {OrderedItem,ParticularRes,addons}=action.payload
            state.CartItems.RestaurantDetails.push(ParticularRes)
            state.CartItems.ResturantOrderedItems.push( {OrderedItem,addons})
        }
    }
})

export default cartslice.reducer
export const {addItem}=cartslice.actions