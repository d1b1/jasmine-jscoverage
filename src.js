
(function(exports){

  // This function will pad a string with a given number of Zeros.
  //
  // Test: Covered
  // 
  // Dependencies:
  //   - number (string or number)
  //   - length (number)
  //

  exports.pad = function(number, lengthLeft, lengthRight) {
     
    var str = '' + number;
    while (str.length < lengthLeft) {
      str = '0' + str;
    }

    if (lengthRight && lengthRight > 0) {
      while (str.length < lengthRight) {
        str = str + '0';
      }
    }

    return str;
  }

  exports.simpleIncrement = function(number, increment) {

    if (increment) return number + increment;

    return number + 1;
  }

})(typeof exports === 'undefined'? this['util']={}: exports);
