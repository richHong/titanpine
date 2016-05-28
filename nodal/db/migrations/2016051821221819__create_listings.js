module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateListings extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016051821221819;
    }

    up() {

      return [
        this.createTable("listings",
         [{"name":"user_id","type":"int"},
          {"name":"house_name","type":"string"},
          {"name":"heading","type":"string"},
          {"name":"street_add","type":"string"},
          {"name":"city","type":"string"},
          {"name":"state","type":"string"},
          {"name":"zipcode","type":"string"},
          {"name":"lat","type":"string"},
          {"name":"lng","type":"string"},
          {"name":"price", "type":"int"},
          {"name":"dates_avail","type":"string"},
          {"name":"house_interests","type":"string"},
          {"name":"house_mission","type":"string"},
          {"name":"house_rules","type":"string"},
          {"name":"vacancies","type":"int"},
          {"name":"primary_member","type":"string"},
          {"name":"amenities","type":"string"},
          {"name":"pic1","type":"string"},
          {"name":"pic2","type":"string"},
          {"name":"pic3","type":"string"},
          {"name":"pic4","type":"string"},
          {"name":"pic5","type":"string"}
        ])
      ];

    }

    down() {

      return [
        this.dropTable("listings")
      ];

    }

  }

  return CreateListings;

})();
