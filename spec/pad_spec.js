// Call the jsCoverage module. This will enable the jsc.require()
// to run the injection calls into the codebase before the Jasmine
// tests are executed.

var jsc = require('jscoverage');

// Ok, get the actual source code.
var util = jsc.require(module, '../src.js');

describe('pad', function() {

  // This checks that the pad function will
  // pad both a string and an number which 
  // are smaller then required length.

  describe('pad to 3 characters', function() {

    it('pads a number', function () {
      expect( util.pad( 1, 3 ) ).toBe( '001' );
    });

    it('pads a string', function () {
      expect( util.pad( '1', 3 ) ).toBe( '001' );
    });

  });
  
  // This checks that a pad for a string of the same length
  // does not alter the string.

  describe('pad to 3 characters (same size)', function() {

    it('pads a number', function () {
      expect( util.pad( 100, 3 ) ).toBe( '100' );
    });

    it('pads a string', function () {
      expect( util.pad( '100', 3 ) ).toBe( '100' );
    });

  });

  // This checks that the pad function will handle in bound
  // strings large then the required pad length.

  describe('pad to 3 characters (too large)', function() {

    it('pads a number', function () {
      expect( util.pad( 10000, 3 ) ).toBe( '10000' );
    });

    it('pads a string', function () {
      expect( util.pad( '10000', 3 ) ).toBe( '10000' );
    });

  });

});
