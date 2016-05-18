'use strict';

const expect = require('chai').expect;
const filename = __filename.split('/').pop().split('.').shift();
const lib = require('../dist/' + filename);


describe('TypeScript tests: ', () => {

    describe('hello', function() {
      const fn = lib[this.title];

      var test = fn('world')

      console.log(test);


      it('should print the proper message', () => {
          expect(fn('world')).to.equals('Hello, world!');
      });
    });
});