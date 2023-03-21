import React from 'react'
import { memo } from 'react';

function Button({handleclick,children}) {
    console.log(`Rendering - ${children}`);
  return (
    <>
    <button onClick={handleclick}>{children}</button>
    </>
  )
}

export default memo( Button)