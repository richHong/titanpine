import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'



import SignUp from './SignUp';

import CreateProfile from './createProfile';
import CreateHouse from './createHouse';
import SearchBar from './SearchBar';
import NavBar from './NavBar';
import MainContain from './MainContain';
import SignIn from './SignIn';
import Results from './results';
import FrontPage from './frontPage';
import houseListingReducer from './appReducers'
    
var store = createStore(houseListingReducer)

render((
    <Provider store={store}>
	<Router history={ hashHistory }>
        <Route path='/' component={ FrontPage } />
        <Route component={ MainContain }>
                <Route path='/results' component={ Results }/>
    			<Route path="/createProfile" component={ CreateProfile } />
    			<Route path='/signup' component={ SignUp } />
    			<Route path='/createHouse' component={ CreateHouse } />
                <Route path='/signin' component={ SignIn } />
        </Route>
	</Router>
    </Provider>
), document.getElementById('app'));