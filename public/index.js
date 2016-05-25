
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import SignUp from './SignUp';
import CreateProfile from './createProfile';
import CreateHouse from './createHouse';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import MainContain from './MainContain';
import SignIn from './SignIn';
import Results from './results';
import FrontPage from './frontPage';

render((
	<Router history={hashHistory}>
        <Route path='/' component={ FrontPage } />
        <Route component={ MainContain }>
                <Route path='/results' component={ Results } />
    			<Route path="/createProfile" component={ CreateProfile } />
    			<Route path='/signup' component={ SignUp } />
    			<Route path='/createHouse' component={ CreateHouse } />
                <Route path='/signin' component={ SignIn } />
        </Route>
	</Router>
), document.getElementById('app'))
