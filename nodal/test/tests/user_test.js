module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');

  class UserTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should return a status of 200 for a general GET request', done => {

        this.endpoint('/v1/users').get((status, body, headers, json) => {

          expect(status).to.equal(200);
          done();

        });

      });

    }

  }

  return UserTest;

})();
