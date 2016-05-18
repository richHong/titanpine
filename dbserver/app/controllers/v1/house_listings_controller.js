module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const HouseListing = Nodal.require('app/models/house_listing.js');

  class V1HouseListingsController extends Nodal.Controller {

    index() {

      HouseListing.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      HouseListing.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      HouseListing.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      HouseListing.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      HouseListing.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1HouseListingsController;

})();
