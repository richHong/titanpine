import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router'

import SignUp from './SignUp'
import NavBar from './NavBar'

render((
	<Router history={hashHistory}>
		<Route path="/" component={ NavBar } />
		<Route path="/signup" component={ SignUp } />
	</Router>
), document.getElementById('app'))
