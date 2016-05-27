module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const AccessToken = Nodal.require('app/models/access_token.js');

  class V1AccessTokensController extends Nodal.Controller {

    index() {

      AccessToken.query()
        .where(this.params.query)
        .end((err,models) => {

          this.respond(err || models,
            ['id',
             'user_id',
             'token_type',
             'expires_at',
             'ip_address',
             'created_at'
           ]);

      });

    }

    create() {

      AccessToken.login(this.params, (err, accessToken) => {

        this.respond(err || accessToken,
          ['id',
           'user_id',
           'access_token',
           'token_type',
           'expires_at',
           'ip_address',
           'created_at'
         ]);

      });

    }

    destroy() {

      AccessToken.logout(this.params, (err, accessToken) => {

        this.respond(err || accessToken,
          ['id',
           'user_id',
           'token_type',
           'expires_at',
           'ip_address',
           'created_at'
         ]);

      });

    }

  }

  return V1AccessTokensController;

})();
