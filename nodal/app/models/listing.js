module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class Listing extends Nodal.Model {}

  Listing.setDatabase(Nodal.require('db/main.js'));
  Listing.setSchema(Nodal.my.Schema.models.Listing);

  Listing.joinsTo(User, {multiple:true});

  return Listing;

})();
