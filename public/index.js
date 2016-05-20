import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import SignUp from './SignUp'
import CreateProfile from './createProfile'
import CreateHouse from './createHouse'

render((
	<Router history={hashHistory}>
		<Route path="/" component={ SignUp } />
    <Route path="/createProfile" component={ CreateProfile } />
    <Route path="/createHouse" component={ CreateHouse } />
	</Router>
), document.getElementById('app'))
