import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom';

import Welcome from './components/Welcome';
import Feature from './components/Feature';
import Signin from './components/auth/Signin';
import Signout from './components/auth/Signout';
import Signup from './components/auth/Signup';

import reducers from './reducers/auth';

import App from './App';

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
            
                
                    <Route exact path='/' component={Welcome}/>
                    <Route path='/signup' component={Signup}/>
                    <Route path='/feature' component={Feature}/>
                    <Route path='/signout' component={Signout}/>
                    <Route path='/signin' component={Signin}/>
                
           
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


