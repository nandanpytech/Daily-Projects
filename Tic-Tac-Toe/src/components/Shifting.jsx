import React from 'react'

function Shifting({nextX}) {
  return (
    <>
        <div className="main">
            <span className="O" style={{backgroundColor:nextX?" rgb(226, 119, 12)":"transparent"}}>O</span>
            <span className="X" style={{backgroundColor:!nextX?" rgb(226, 119, 12)":"transparent"}}>X</span>
        </div>

    </>
  )
}

export default Shifting