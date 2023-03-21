import React, { Component } from 'react'
import ForwardRef from './ForwardRef'

export class ParentForwardRef extends Component {

    constructor(props) {
      super(props)
    
      this.createdref=React.createRef()

    }
    clickhandler=()=>{
      this.createdref.current.focus()
    }
  render() {
    return (
      <>
      <ForwardRef ref={this.createdref}/>
      <button onClick={this.clickhandler}>click</button>
      </>
    )
  }
}

export default ParentForwardRef