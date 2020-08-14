import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class Stepper extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    inc = () => {
        this.setState({count: this.state.count + 1},() => {
          console.log('Count Increased by One')
        })
    }

    dec = () => {
        this.setState({count: this.state.count - 1},() => {
            console.log('Count Decreased by One')
          })
    }



  render() {

    let {count} = {...this.state}

    return (
      <>
        <Button variant="danger" onClick={this.dec}>-</Button> <h1 style={{display: "inline-block"}}> {count} </h1> <Button variant="success" onClick={this.inc}>+</Button>
      </>
    )
  }
}

export default Stepper
