import React, { Component } from 'react'

class Reffs extends Component {
    constructor(props) {
      super(props)
    
      this.createdref=React.createRef()
    }
    // componentDidMount(){
    //     this.createdref.current.focus()
    // }
    clickhandler=()=>{
        this.createdref.current.focus()
    }
  render() {
    return (
        <>
             <input type="text" ref={this.createdref} />
             <button onClick={this.clickhandler}>click</button>
        </>
     
    )
  }
}

export default Reffs