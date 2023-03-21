import React from 'react'
import { memo } from 'react'

function Memo2({name}) {
    console.log("hi");
  return (
    <div>{name}</div>
  )
}

export default memo( Memo2)