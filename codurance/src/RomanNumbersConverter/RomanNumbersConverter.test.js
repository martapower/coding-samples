var RomanNumbersConverter = require ('./RomanNumbersConverter.js');

describe('RomanNumbersConverter', () => {
  it('should convert the number 1 to  I', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(1)).toEqual('I');
  });
  it('should convert the number 5 to  V', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(5)).toEqual('V');
  });
  it('should convert the number 10 to  X', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(10)).toEqual('X');
  });
  it('should convert the number 50 to  L', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(50)).toEqual('L');
  });
  it('should convert the number 100 to  C', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(100)).toEqual('C');
  });
  it('should convert the number 500 to  D', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(500)).toEqual('D');
  });
  it('should convert the number 1000 to  M', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(1000)).toEqual('M');
  });

  it('should convert the number 3 to III', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(3)).toEqual('III');
  });

  it('should convert the number 4 to IV', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(4)).toEqual('IV');
  });

  it('should convert the number 7 to VII', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(7)).toEqual('VII');
  });
  it('should convert the number 9 to IX', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(9)).toEqual('IX');
  });
  it('should convert the number 11 to XI', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(11)).toEqual('XI');
  });
  it('should convert the number 14 to XIV', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(14)).toEqual('XIV');
  });
  it('should convert the number 2794 to MMDCCXCIV', () => {
    var romanNumbersConverter = new RomanNumbersConverter();
    expect(romanNumbersConverter.convert(2794)).toEqual('MMDCCXCIV');
  });
})
