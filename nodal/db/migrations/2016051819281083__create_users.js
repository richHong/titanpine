module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateUsers extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016051819281083;
    }

    up() {

      return [
        this.createTable("users",
          [{"name":"email","type":"string","properties":{"unique":true}},
           {"name":"password","type":"string"},
           {"name":"username","type":"string","properties":{"unique":true}},
           {"name":"first_name","type":"string"},
           {"name":"last_name","type":"string"},
           {"name":"description","type":"string"},
           {"name":"occupation","type":"string"},
           {"name":"gen_interests","type":"string"},
           {"name":"tech_interests","type":"string"},
           {"name":"hometown","type":"string"},
           {"name":"avatar","type":"string"},
           {"name":"time_frame","type":"string"}
         ])
      ];

    }

    down() {

      return [
        this.dropTable("users")
      ];

    }

  }

  return CreateUsers;

})();
