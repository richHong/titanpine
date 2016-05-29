module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const AccessToken = Nodal.require('app/models/access_token.js');

  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1AccessTokensController extends AuthController {

    index() {

      AccessToken.query()
        .where(this.params.query)
        .end((err,models) => {

          this.respond(err || models,
            ['id',
             'token_type',
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

      this.authorize((accessToken,user) => {

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

      });


    }

  }

  return V1AccessTokensController;

})();
