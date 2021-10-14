// @packages
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// @scripts
import Home from '../components/pages/home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import Navbar from '../components/Layout/Navbar';
import NotFound from '../components/pages/NotFound';
import Users from '../components/pages/Users';

const Router = () => (
    <BrowserRouter>
    <div className="App">
      <Navbar/>

     <Switch>
       <Route exact path= '/' component={Home}/>
       <Route exact path= '/about' component={About}/>
       <Route exact path= '/contact' component={Contact}/>
       <Route exact path= '/users' component={Users}/>
       <Route component={NotFound}/>
       
     </Switch>
    </div>
   </BrowserRouter>
)

export default Router;