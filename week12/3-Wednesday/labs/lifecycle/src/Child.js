import React, { Component } from 'react'


class Child extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    shouldComponentUpdate = (nextProps, nextState) => {
      
        // nextProps are the recieved update props

        console.log(`incoming props: ${nextProps.data}, old prop: ${this.props.data}`);

        return true

    }

    componentDidUpdate = (prevProps, prevState) => {
      
        console.log(`previos props: ${prevProps.data}, current props: ${this.props.data}`)
    }
    
   componentWillUnmount = () => {
     
    console.log(`Used to clean up memory to prevent leaks`)
   }
   
    
    

  render() {
    return (
      <>
        {this.props.data}
        <br />
        {Date.now()}
      </>
    )
  }
}

export default Child
