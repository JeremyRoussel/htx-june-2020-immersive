import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import BaseLayout from './Components/Layout/BaseLayout'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Blogs from './Components/Blogs'
import Stepper from './Components/Stepper'
import Puppies from './Components/Puppies'
import ToDo from './Components/Todo'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

  <BrowserRouter>
    
    <BaseLayout>
      
      <Switch>
        <Route exact path="/" component={App}/>


        <Redirect from="/aboutus" to="/" />

        <Route path="/aboutus" component={AboutUs}/>
        
        <Route path="/contactus" component={ContactUs}/>
        
        <Route exact path="/blogs" component={Blogs}/>
        <Route path="/blogs/:blogsID" component={Blogs}/>

        <Route path="/stepper" component={Stepper} />

        <Route path="/movies" component={Puppies} />
        
        <Route path="/todo" component={ToDo} />
        
        <Route component={App} />

      </Switch>

    </BaseLayout>
  
  </BrowserRouter>
  
  ,

  document.getElementById('root')
);


