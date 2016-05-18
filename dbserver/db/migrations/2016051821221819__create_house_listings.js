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
        this.createTable("house_listings", [
          {"name":"heading","type":"text"},
          {"name":"subheader","type":"text"},
          {"name":"street_add","type":"text"},
          {"name":"city","type":"text"},
          {"name":"state","type":"text"},
          {"name":"zipcode","type":"text"},
          {"name":"house_rules","type":"text"},
          {"name":"house_interests","type":"text"},
          {"name":"price", "type":"integer"},
          {"name":"dates_avail","type":"text"},
          {"name":"vacancies","type":"integer"},
          {"name":"primary_member","type":"text"},
          {"name":"amenities", "type":"text"}
        ])
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
