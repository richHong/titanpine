import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import SignUp from './SignUp'

render((
	<Router history={hashHistory}>
		<Route path="/" component={ SignUp } />
	</Router>
), document.getElementById('app'))
