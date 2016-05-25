module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const pg = require('pg');
  const HouseListingPic = Nodal.require('app/models/house_listing_pic.js');

  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1HouseListingPicsController extends AuthController {

    index() {

      HouseListingPic.query()
        .join('user')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models,
            ['id',
             'url',
             {
               user:
               ['username']
             }
          ]);

      });

    }

    show() {

      HouseListingPic.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }


    create() {

      this.authorize((accessToken, user) => {

        this.params.body.user_id = user.get('id');

        HouseListingPic.create(this.params.body, (err, model) => {

          this.respond(err || model);

        });

      });

    }

    update() {

      this.authorize((accessToken, user) => {

        HouseListingPic.update(this.params.route.id, this.params.body, (err, model) => {

          this.respond(err || model);

        });

      });


    }

    destroy() {

      this.authorize((accessToken, user) => {

        HouseListingPic.destroy(this.params.route.id, (err, model) => {

          this.respond(err || model);

        });

      });

    }

  }

  return V1HouseListingPicsController;

})();
