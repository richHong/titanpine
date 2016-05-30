module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const pg = require('pg');
  const Listing = Nodal.require('app/models/listing.js');

  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1ListingsController extends AuthController {

    index() {

      Listing.query()
        .join('user')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models,
            ['id',
             'user_id',
             'house_name',
             'heading',
             'street_add',
             'city',
             'state',
             'zipcode',
             'lat',
             'lng',
             'price',
             'dates_avail',
             'house_interests',
             'house_mission',
             'house_rules',
             'vacancies',
             'primary_member',
             'amenities',
             'created_at',
             'updated_at',
             'pic1',
             'pic2',
             'pic3',
             'pic4',
             'pic5',
             {
               user:
               ['id','username','email','first_name','avatar']
             }
          ]);

        });

    }

    show() {

      Listing.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      this.authorize((accessToken, user) => {

        this.params.body.user_id = user.get('id');

        Listing.create(this.params.body, (err, model) => {

          this.respond(err || model);

        });

      });

    }

    update() {

      this.authorize((accessToken, user) => {

        Listing.update(this.params.route.id, this.params.body, (err, model) => {

          this.respond(err || model);

        });

      });

    }

    destroy() {

      this.authorize((accessToken, user) => {

        Listing.destroy(this.params.route.id, (err, model) => {

          this.respond(err || model);

        });

      });

    }

  }

  return V1ListingsController;

})();
