import {React,memo} from 'react'

function ReactMemmo({name}) {
 
console.log("********************rendering react memo*******************");
  return (
    <div>{name}</div>
  )
}

export default memo(ReactMemmo)