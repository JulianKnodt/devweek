import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';
import App from './components/App.js';
import NavBar from './components/Navbar.js';
import Dashboard from './components/Dashboard/index.js';
import Home from './components/Home.js';
import Upload from './components/Upload.js';


ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path='/' component={ App }>
			<IndexRoute component={ Home } />
			<Route path='/explore' component={ Dashboard } />
			<Route path='/purse' component={ Dashboard } />
			<Route path='/upload' component={ Upload } />
			<Route path='*' component={ Home } />
		</Route>
	</Router>,
	document.getElementById('app')
)
