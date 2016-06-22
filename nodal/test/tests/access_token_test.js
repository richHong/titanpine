module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');

  class AccessTokenTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should return a status of 200 for a general GET request', done => {

        this.endpoint('/v1/access_tokens').get((status, headers, body, json) => {

          expect(status).to.equal(200);
          done();

        });

      });

    }

  }

  return AccessTokenTest;

})();
