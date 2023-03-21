import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
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
      console.log("Rendering pure component")
    return (
      <div>{this.state.name}</div>
    )
  }
}

export default Pure