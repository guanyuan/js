var removeArray = require('../../src/modules/removeArray');

describe('removeArray', () => {
  it('#should length minus 1', () => {
    var arr = [1,2,3];
    removeArray(arr, 1);
    expect(arr.length).toBe(2);
  })
})