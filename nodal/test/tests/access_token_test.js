module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');
  const Router = Nodal.require('app/router.js');

  console.log(Router);

  class RouterTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should return a status of', done => {

        expect(null).to.not.exist;
        done();

      });

    }

  }

  return RouterTest;

})();
