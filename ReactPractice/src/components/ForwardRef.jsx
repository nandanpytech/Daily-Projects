import React from 'react'

const ForwardRef=React.forwardRef((props,ref)=> {
        return (
          <input type="text" ref={ref} />
        )
      }
)

export default ForwardRef