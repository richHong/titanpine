module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const AccessToken = Nodal.require('app/models/access_token.js');

  class AuthController extends Nodal.Controller {

    // userLogin(callback) {
    //
    //   this.setHeader('Cache-Control', 'no-store');
    //   this.setHeader('Pragma', 'no-cache');
    //
    //   AccessToken.login(this.params, (err, user, password) => {
    //
    //     if (err) {
    //       return this.respond(err);
    //     }
    //
    //     callback(user, password);
    //
    //   });
    //
    // }

    authorize(callback) {

      this.setHeader('Cache-Control', 'no-store');
      this.setHeader('Pragma', 'no-cache');

      AccessToken.verify(this.params, (err, accessToken, user) => {

        if (err) {
          return this.respond(err);
        }

        callback(accessToken, user);

      });

    }

  }

  return AuthController;

})();
