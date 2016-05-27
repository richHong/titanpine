import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



import SignUp from './SignUp';
import SignOut from './signout';
import CreateProfile from './createProfile';
import CreateHouse from './createHouse';
import SearchBar from './SearchBar';
import NavBar from './navBar';
import MainContain from './MainContain';
import SignIn from './SignIn';
import Results from './results';
import FrontPage from './frontPage';
import SingleListing from './singlelisting';


import houseListingReducer from './appReducers';

var store = createStore(houseListingReducer);

var loggedIn = function() {
  return !!localStorage.token;
};

var requireAuth = function(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

var logout = function(nextState, replace) {
  if (!!localStorage.token) {
    delete localStorage.token;
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
};

render((
    <Provider store={store}>
  <Router history={ hashHistory }>
      <Route path='/' component={ FrontPage } />
      <Route component={ MainContain }>
          <Route path='/results' component={ Results }/>
          <Route path="/createProfile" component={ CreateProfile } onEnter={requireAuth}/>
          <Route path='/signup' component={ SignUp } />
          <Route path='/createHouse' component={ CreateHouse } onEnter={requireAuth}/>
          <Route path='/signin' component={ SignIn } />
          <Route path='/singlelisting' component={ SingleListing } />
          <Route path='/signout' component={ SignOut } onEnter={logout} />
      </Route>
	</Router>
    </Provider>
), document.getElementById('app'));
