import React, { Component } from 'react'
import Loading from './Loading'
import Child from './Child'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: true,
      sendingChildData: 4,
      loadChild: true
    }
  }


  componentDidMount = () => {

    // setTimeout(() => {
      
    //   this.setState({
    //     isLoaded: true
    //   })
    // }, 10)
  }

  handleClick = () => {

    this.setState({
      sendingChildData: this.state.sendingChildData + 1
    })
  }

  handleUnmount = () => {

    this.setState({
      loadChild: false
    })
  }

  handleMount = () => {

    this.setState({
      loadChild: true
    })
  }

  render() {

    if (!this.state.isLoaded){
      return (
        <Loading />
      )
    }
    else {

      let loaded = <>Count: <Child data={this.state.sendingChildData} /> </>
      return (
        <>
          Home Page <br />

          {this.state.loadChild
            ? loaded
            : null
          }

          

          <br />

          <button onClick={this.handleClick} >Click Me</button>

          <br />

          <button onClick={this.handleUnmount} >Unmount</button>

          <br />

          <button onClick={this.handleMount} >Mount</button>



        </>
      )
    }

  }
}

export default App
