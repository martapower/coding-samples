var tenMultiples = ['I', 'X', 'C', 'M'];
var fiveMultiples = ['V', 'L', 'D'];

class RomanNumbersConverter {

  convert(integer) {
    var strNumber = integer.toString();
    var result = '';
    var strLength = strNumber.length;

    for (var i = 0; i < strLength; i ++) {
      result += this.convertDigit(parseInt(strNumber.charAt(i), 10), (strLength - 1) - i);
    }

    return result;
  }

  convertDigit(digit, position) {

    if (digit <= 3) {
      var roman = '';
      for (var i = 0; i < digit; i ++) {
        roman += tenMultiples[position];
      }
      return roman;
    }
    if (digit === 4) {
      return tenMultiples[position] + fiveMultiples[position];
    }
    if (digit >= 5 && digit <= 8) {
      var roman = fiveMultiples[position];
      for (var i = 0; i < (digit - 5); i ++) {
        roman += tenMultiples[position];
      }
      return roman;
    }

    if (digit === 9) {
      return tenMultiples[position] + tenMultiples[position + 1];
    }

    if (digit === 10) {
      return tenMultiples[position + 1];
    }
  }

};

module.exports = RomanNumbersConverter;
