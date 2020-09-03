
import React, { Component } from 'react'
import { connect } from 'react-redux'
import counterActions from './actions/counterActions';

class Counter extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.onIncrement}>Plus One</button>
        <h1>{this.props.ctr}</h1>


      </>
    )
  }
} //end of the class 

//purpose is to map redux global state to a prop we can use inside react
const mapStateToProps = (state) => {

  //mapped react prop count to state.counter
  return {
    ctr: state.counter

  }
}

const mapDispatchToProps = (dispatch) => {
  //dispatch sends message to store 
  return {
    onIncrement: () => dispatch(counterActions())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter) //connects App component to the provider
