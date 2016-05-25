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
        this.createTable("house_listings",
         [{"name":"user_id","type":"int"},
          {"name":"house_name","type":"string"},
          {"name":"heading","type":"text"},
          {"name":"street_add","type":"text"},
          {"name":"city","type":"text"},
          {"name":"state","type":"text"},
          {"name":"zipcode","type":"text"},
          {"name":"price", "type":"int"},
          {"name":"dates_avail","type":"text"},
          {"name":"house_interests","type":"text"},
          {"name":"house_mission","type":"string"},
          {"name":"house_rules","type":"text"},
          {"name":"vacancies","type":"int"},
          {"name":"primary_member","type":"text"},
          {"name":"amenities","type":"text"},
          {"name":"pics","type":"text[]"}
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
