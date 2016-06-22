module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');

  class ListingTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should do something', done => {

        expect(null).to.not.exist;
        done();

      });

    }

  }

  return ListingTest;

})();
