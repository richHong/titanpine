module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class HouseListingPic extends Nodal.Model {}

  HouseListingPic.setDatabase(Nodal.require('db/main.js'));
  HouseListingPic.setSchema(Nodal.my.Schema.models.HouseListingPic);

  return HouseListingPic;

})();
