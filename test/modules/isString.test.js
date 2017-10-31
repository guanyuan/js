var isString = require('../../src/modules/isString');

describe('isString', () => {
  it('#should return true given "hello"', () => {
    var str = 'hello';
    expect(isString(str)).toBeTruthy();
  })
  
  it('#should return true given new String("hello")', () => {
    var str = new String("hello");
    expect(isString(str)).toBeTruthy();
  })
  
  it('#should return true given undefined', () => {
    var str = undefined;
    expect(isString(str)).toBeFalsy();
  })
  
  it('#should return true given undefined', () => {
    var str = 123;
    expect(isString(str)).toBeFalsy();
  })
})