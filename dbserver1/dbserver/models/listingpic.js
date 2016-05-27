module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('dbserver/models/user.js');
  const Listing = Nodal.require('dbserver/models/listing.js');

  class Listingpic extends Nodal.Model {}

  Listingpic.setDatabase(Nodal.require('db/main.js'));
  Listingpic.setSchema(Nodal.my.Schema.models.Listingpic);

  Listingpic.joinsTo(User, {multiple:true});
  Listingpic.joinsTo(Listing, {multiple:true});

  return Listingpic;

})();
