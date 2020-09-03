import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './Counter';
import CounterHook from './components/CounterHook'
import reducer from './reducers/reducer'
import {BrowserRouter, Switch, Route, withRouter} from 'react-router-dom'
import BaseLayout from './components/layout/BaseLayout'
import Nav from './Nav';
import Nav2 from './Nav2'


let saveToLocalStorage = (state) =>{

  try{
    const serializeState  = JSON.stringify(state);

    localStorage.setItem('state', serializeState);

    //localStorage.state = serializeState;
  }
  catch(e){
    console(e)
  }

}

let loadFromLocalStorage = () =>{

  const serializeState = localStorage.getItem('state');
  if (serializeState == null){
    return undefined;
  }
  else {
    return JSON.parse(serializeState);
  }

}

const persistedState = loadFromLocalStorage();


let store = createStore(reducer, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// creating store inside of redux

store.subscribe(()=>{

  //call a function pass the state

  //state.getState()
  saveToLocalStorage(store.getState());
})

ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Counter}/>
        <Route path='/hooks' component={CounterHook}/>
        <Route path='/nav' component={Nav}/>
        <Route path='/nav2' component={Nav2}/>
        
        
      </Switch>
      </BaseLayout>
    </BrowserRouter>
    
  </Provider>
  ,
  document.getElementById('root')
);


