import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
    name:"cart",
    initialState:{
        CartItems:{RestaurantDetails:[],ResturantOrderedItems:[],ItemAddons:[]},
    },
    reducers:{
        addItem:(state,action)=>{
            const {OrderedItem,ParticularRes,addons}=action.payload
            state.CartItems.RestaurantDetails.push(OrderedItem)
            state.CartItems.ResturantOrderedItems.push(ParticularRes)
            state.CartItems.ItemAddons.push(addons)
        }
    }
})

export default cartslice.reducer
export const {addItem}=cartslice.actions