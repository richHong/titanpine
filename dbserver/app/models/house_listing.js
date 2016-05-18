module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class HouseListing extends Nodal.Model {}

  HouseListing.setDatabase(Nodal.require('db/main.js'));
  HouseListing.setSchema(Nodal.my.Schema.models.HouseListing);

  return HouseListing;

})();
