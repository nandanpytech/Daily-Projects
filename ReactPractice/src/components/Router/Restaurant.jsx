import React from 'react'
import { useParams } from 'react-router-dom'


function Restaurant() {
    const {id}=useParams()
  return (
    <div>Restaurant{id}</div>
  )
}

export default Restaurant