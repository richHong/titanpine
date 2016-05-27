module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const pg = require('pg');
  const Listingpic = Nodal.require('app/models/listingpic.js');

  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1ListingpicsController extends AuthController {

    index() {

      Listingpic.query()
        .join('user')
        .join('listing')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models,
            ['id',
             'url',
             {
               user:
               ['username']
             },
             {
               listing:
               ['id','house_name','city','state']
             }
          ]);

      });

    }

    show() {

      Listingpic.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }


    create() {

      this.authorize((accessToken, user) => {

        this.params.body.user_id = user.get('id');

        Listingpic.create(this.params.body, (err, model) => {

          this.respond(err || model);

        });

      });

    }

    update() {

      this.authorize((accessToken, user) => {

        Listingpic.update(this.params.route.id, this.params.body, (err, model) => {

          this.respond(err || model);

        });

      });


    }

    destroy() {

      this.authorize((accessToken, user) => {

        Listingpic.destroy(this.params.route.id, (err, model) => {

          this.respond(err || model);

        });

      });

    }

  }

  return V1ListingpicsController;

})();
