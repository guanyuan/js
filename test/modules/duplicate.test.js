var duplicate = require('../../src/modules/duplicate');

describe('duplicate', () => {
  it('#should duplicate the array', () => {
    var arr = [1,2,3];
    var result = duplicate(arr);
    expect(result.length).toBe(6);
    expect(result).toEqual([1,2,3,1,2,3]);
  })
})