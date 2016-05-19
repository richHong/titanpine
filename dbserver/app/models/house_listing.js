module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class HouseListing extends Nodal.Model {}

  HouseListing.setDatabase(Nodal.require('db/main.js'));
  HouseListing.setSchema(Nodal.my.Schema.models.HouseListing);

  HouseListing.joinsTo(User, {multiple:true});

  return HouseListing;

})();
