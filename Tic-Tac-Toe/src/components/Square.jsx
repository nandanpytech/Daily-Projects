import React from 'react'

export default function Square({value,onsquareclick}) {

  return (
    <div className='box' onClick={onsquareclick}>
       {value}
    </div>
  )
}
