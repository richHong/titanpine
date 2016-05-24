module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const HouseListingPic = Nodal.require('app/models/house_listing_pic.js');

  class V1HouseListingPicsController extends Nodal.Controller {

    index() {

      HouseListingPic.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      HouseListingPic.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      HouseListingPic.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      HouseListingPic.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      HouseListingPic.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1HouseListingPicsController;

})();
