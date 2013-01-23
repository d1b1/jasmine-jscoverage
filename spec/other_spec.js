
// Call the jsCoverage module. This will enable the jsc.require()
// to run the injection calls into the codebase before the Jasmine
// tests are executed.

if (typeof module !== 'undefined' && module.exports) {
  var jsc  = require('jscoverage');
  var util = jsc.require(module, '../src.js');
}

// Ok, get the actual source code.

describe('simpleIncrement', function() {

  // This checks that the pad function will
  // pad both a string and an number which 
  // are smaller then required length.

  describe('pad to 3 characters', function() {

    it('Increment by 1', function () {
      expect( util.simpleIncrement( 1 ) ).toBe( 2 );
    });

    it('Increment by 5', function () {
      expect( util.simpleIncrement( 5, 5 ) ).toBe( 10 );
    });

  });


});
