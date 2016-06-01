// 'use strict';
// import React from 'react';
//
// class AuthHelpers extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//
//
//     loggedIn(localStorage) {
//
//         return !!localStorage.token;
//
//     }
//
//     requireAuth(nextState, replace, loggedIn) {
//
//         if (!loggedIn()) {
//
//             replace({
//                 pathname: '/signin',
//                 state: {
//                     nextPathname: nextState.location.pathname
//                 }
//             });
//
//         }
//
//     }
//
//     logout(nextState, replace, window, localStorage, fetch) {
//
//         let authToken = window.localStorage.getItem('token');
//         let id = window.localStorage.getItem('i');
//
//         if (!!localStorage.token) {
//
//             fetch('http://localhost:3001/v1/access_tokens/' + id + '?access_token=' + authToken, {
//                     method: 'DELETE',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                 })
//                 .then((response) => response.json());
//             delete localStorage.token;
//             delete localStorage.i;
//             delete localStorage.userID;
//             replace({
//                 pathname: '/signout',
//                 state: {
//                     nextPathname: nextState.location.pathname
//                 }
//             });
//
//         }
//
//     }
//
// }
//
// export default AuthHelpers;
