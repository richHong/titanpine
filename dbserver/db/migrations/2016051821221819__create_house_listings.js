module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateHouseListings extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016051821221819;
    }

    up() {

      return [
        this.createTable("house_listings", [])
      ];

    }

    down() {

      return [
        this.dropTable("house_listings")
      ];

    }

  }

  return CreateHouseListings;

})();
