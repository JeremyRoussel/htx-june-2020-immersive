import React, { Component } from 'react'

import H1 from './components/liftingstate/H1'
import H2 from './components/liftingstate/H2'
import H3 from './components/liftingstate/H3'

class App extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  resetCount = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <>
        <h1>Lifting State</h1>
        <H1 count={this.state.count} />
        <H3 increment={this.updateCount}/>
        <br /><br />
        <H2 reset={this.resetCount} />
        <br />
      </>
    )
  }
}

export default App
