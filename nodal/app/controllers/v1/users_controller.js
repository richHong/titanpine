module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');
  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1UsersController extends AuthController {

    index() {

      User.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models,
            ['id',
             'email',
             'username',
             'first_name',
             'last_name',
             'description',
             'occupation',
             'gen_interests',
             'tech_interests',
             'hometown',
             'avatar',
             'time_frame',
             'created_at'
           ]);

        });

    }

    show() {

      User.find(this.params.route.id, (err, model) => {

        this.respond(err || model,
          ['id',
           'email',
           'username',
           'first_name',
           'last_name',
           'description',
           'occupation',
           'gen_interests',
           'tech_interests',
           'hometown',
           'avatar',
           'time_frame',
           'created_at'
         ]);

      });

    }

    create() {

        User.create(this.params.body, (err, model) => {

          this.respond(err || model,
            ['id',
            'email',
            'username'
          ]);

        });

    }

    update() {

      this.authorize((accessToken, user) => {

        User.update(this.params.route.id, this.params.body, (err, model) => {

          this.respond(err || model,
            ['id',
             'email',
             'username',
             'first_name',
             'last_name',
             'description',
             'occupation',
             'gen_interests',
             'tech_interests',
             'hometown',
             'avatar',
             'time_frame',
             'created_at'
           ]);

        });

      });

    }

    destroy() {

      this.authorize((accessToken, user) => {

        User.destroy(this.params.route.id, (err, model) => {

          this.respond(err || model,
            ['id',
            'email',
            'username',
            'first_name',
            'last_name',
            'description',
            'occupation',
            'gen_interests',
            'tech_interests',
            'hometown',
            'avatar',
            'time_frame',
            'created_at'
          ]);

        });

      });


    }

  }

  return V1UsersController;

})();
