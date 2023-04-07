import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const cartslice=createSlice({
    name:"cart",
    initialState:{
        CartItems:{RestaurantDetails:[],ResturantOrderedItems:[]},
    },
    reducers:{
        addItem:(state,action)=>{
            const PrevRes=current(state.CartItems.RestaurantDetails[0] || state.CartItems.RestaurantDetails)
            const {OrderedItem,ParticularRes,addons}=action.payload

            
            if(PrevRes.length==0){
                state.CartItems.RestaurantDetails.push(ParticularRes)
                state.CartItems.ResturantOrderedItems.push( {OrderedItem,addons})
            }else{
                if(PrevRes.id!==ParticularRes.id){
                    state.CartItems.RestaurantDetails=[]
                    state.CartItems.ResturantOrderedItems=[]
                    state.CartItems.RestaurantDetails.push(ParticularRes)
                }
                state.CartItems.ResturantOrderedItems.push( {OrderedItem,addons})
            }
           
        }
    }
})

export default cartslice.reducer
export const {addItem}=cartslice.actions