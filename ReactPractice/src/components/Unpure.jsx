import React, { Component } from 'react'
import ReactMemmo from './ReactMemmo';

export class Unpure extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name:"nandan"
        }
      }
      
      componentDidMount(){
          setInterval(() => {
              this.setState({
                  name:"nandan"
              })
          }, 1000);
      }
  render() {
    console.log("***********Rendering pure component********")
    return (
      <ReactMemmo name={this.state.name}/>
    )
  }
}

export default Unpure