import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router';
import App from './components/App.jsx';
import NavBar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard/index.jsx'
import Home from './components/Home.jsx';

ReactDOM.render(

  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='/explore' component={ Dashboard } />
      <Route path='/purse' component={ Dashboard } />
      <Route path='*' component={ Home } />
    </Route>
  </Router>

, document.getElementById('app'));






