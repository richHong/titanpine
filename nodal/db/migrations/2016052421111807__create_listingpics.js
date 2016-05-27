module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateListingpics extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016052421111807;
    }

    up() {

      return [
        this.createTable("listingpics",
         [{"name":"user_id","type":"int"},
          {"name":"listing_id","type":"int"},
          {"name":"url","type":"string"}
        ])
      ];

    }

    down() {

      return [
        this.dropTable("listingpics")
      ];

    }

  }

  return CreateListingpics;

})();
