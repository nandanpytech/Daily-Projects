import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:""
      }
    }
    clickhandler=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            console.log("hii")
            document.title=`clicked ${this.state.count} times`
        }
    
    }
  render() {
    return (
      <>
      <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
      <button onClick={this.clickhandler}>click me {this.state.count}</button>
      </>
    )
  }
}

export default ClassCounter