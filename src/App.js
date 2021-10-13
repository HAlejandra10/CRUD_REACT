import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/Layout/Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Users from './components/pages/Users';

function App() {
  return (
   <Router>
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
   </Router>
  );
}

export default App;
