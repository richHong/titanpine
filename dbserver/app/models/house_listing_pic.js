module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const HouseListing = Nodal.require('app/models/house_listing.js');

  class HouseListingPic extends Nodal.Model {}

  HouseListingPic.setDatabase(Nodal.require('db/main.js'));
  HouseListingPic.setSchema(Nodal.my.Schema.models.HouseListingPic);

  HouseListingPic.joinsTo(HouseListing, {multiple:true});

  return HouseListingPic;

})();
