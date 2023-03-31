import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice(
    {
        name:'cart',
        initialState:{
            items:["apple","banana"],
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload)
            },
            removeItem:(state,action)=>{
                state.items.pop()
            },
            clearCart:(state)=>{
                state.items=[]
            }
        }
    }
)

export const {addItem,removeItem,clearCart}=cartslice.actions       //it export all actions what insides the reducers
export default cartslice.reducer        //it exports reducers