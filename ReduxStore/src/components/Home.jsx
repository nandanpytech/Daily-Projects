import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../slice'



function Home() {
  const cartitems=useSelector(store=>store.cart.items)
  const dispatch=useDispatch()


  const handleAddItem=()=>{
    console.log("hi");
    dispatch(addItem("Grapes"))
  }


  return (
    <>
          <div>{cartitems.length}</div>
          <button onClick={handleAddItem}>Add Item</button>
    </>

  )
}

export default Home