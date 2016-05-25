module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class HouseListingPic extends Nodal.Model {}

  HouseListingPic.setDatabase(Nodal.require('db/main.js'));
  HouseListingPic.setSchema(Nodal.my.Schema.models.HouseListingPic);

  HouseListingPic.joinsTo(User, {multiple:true});

  return HouseListingPic;

})();
