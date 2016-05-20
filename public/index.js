import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import SignUp from './SignUp';
import CreateProfile from './createProfile'

render((
	<Router history={hashHistory}>
		<Route path="/signup" component={ SignUp } />
    	<Route path="/createProfile" component={ CreateProfile } />
	</Router>
), document.getElementById('app'))
