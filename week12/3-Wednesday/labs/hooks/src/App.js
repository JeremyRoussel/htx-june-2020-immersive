import React, { Component } from 'react'
import Hook from './Hook'

class App extends Component {

  constructor(p) {
    super()

    this.state = {
      count: 0,
      title: "Class Based Components",
      arr: [1, 2, 5, 6, 7],
      add: 0,
      imgURL: ""
    }
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentDidMount = async () => {

    try {
      let results = await fetch('https://randomuser.me/api')

      let data = await results.json();

      let picURL = data.results[0].picture.large

      console.log(picURL);

      this.setState({
        imgURL: picURL
      })
    }
    catch{
      console.log(`no response for fetch`);
    }

    
  }

  render() {

    const {count, title, arr, add, imgURL} = this.state

    let display =
    <>
        <h1>{title} Hook:</h1>
        <button onClick={this.handleClick} >Increment in App.js</button>
        <p>Count in App.js: {count}</p>
        <br />
        <Hook />
        <br /> <br />
        Array in App: {arr.map(a => a*3 + ' ')}
    </>

    return (
      <>
        {/* {display} */}

        <img src={imgURL} alt="random image" />

        <Hook />
      </>
    )
  }
}

export default App

