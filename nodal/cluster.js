module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');
  const cluster = require('cluster');

  if (cluster.isMaster) {

    const daemon = Nodal.require('dbserver/daemon.js');
    daemon.start(Nodal.my.Config.secrets.port);

  } else {

    const dbserver = new Nodal.Application();
    dbserver.listen(Nodal.my.Config.secrets.port);

  }

})();
