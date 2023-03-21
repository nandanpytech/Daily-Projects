import React, { Component } from 'react'

export class CbRef extends Component {
    constructor(props) {
      super(props)
    
      this.cbref=null
      this.setcbref=(element)=>{
        this.cbref=element
      }
    }

    clickhandler=()=>{
        this.cbref.focus()
    }
  render() {
    return (
        <>
        
        <input type="text" ref={this.setcbref} />
        <button onClick={this.clickhandler}>click</button>
        </>
    )
  }
}

export default CbRef