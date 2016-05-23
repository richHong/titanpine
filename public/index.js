import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

import SignUp from './SignUp';
import CreateProfile from './createProfile'
import CreateHouse from './createHouse'
import SearchBar from './SearchBar'
import NavBar from './navBar'
import MainContain from './MainContain'
import SignIn from './SignIn'

render((
	<Router history={ hashHistory }>
        <Route path='/' component={ NavBar } />
        <Route component={ MainContain }>
            <Route component={ NavBar }>
    			<Route path="/createProfile" component={ CreateProfile } />
    			<Route path='/signup' component={ SignUp } />
    			<Route path='/createHouse' component={ CreateHouse } />
                <Route path='/signin' component={ SignIn } />
            </Route>
        </Route>
	</Router>
), document.getElementById('app'))
