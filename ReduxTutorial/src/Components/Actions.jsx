import redux, { createStore } from 'redux'

import React from 'react'

function Actions() {
    
const BUY_CAKE="Buy Cake"
function buycake(){
    return(
        {
            type:BUY_CAKE,
            info:"Buy cake action"
        }
    )
}

//(prevstate,action)=> newstate
const initialstate={
    numofcakes:10
}


//Reduceres
const reducer=(state=initialstate,action)=>{
    switch (action.type) {
        case BUY_CAKE:
            return({
             ...state, numofcakes:state.numofcakes-1
            })
    
        default:
            return 1;
            
    }
}


//Hold application state
const store=createStore(reducer)

//Access state
console.log(store.getState())

//subscribe method
const unsubscribe=store.subscribe(()=>console.log("Subscribed"))

//action calling
store.dispatch(buycake())


return(
    <h1>d</h1>
)
 
}

export default Actions