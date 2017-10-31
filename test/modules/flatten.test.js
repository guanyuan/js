var flatten = require('../../src/modules/flatten');

describe('flatten', () => {
  it('#should return [1, 2] given [1, 2]', () => {
    var arr = [1, 2];
    var result = flatten(arr);
    expect(result).toEqual([1,2]);
  })
  
  it('#should return [1,2,3] given [1,[2,3]]', () => {
    var arr = [1,[2,3]];
    var result = flatten(arr);
    expect(result).toEqual([1,2,3]);
  })
  
  it('#should return [1,2,3,4,5] given [1,[2,[3, [4]]],5]', () => {
    var arr = [1,[2,[3, [4]]],5];
    var result = flatten(arr);
    expect(result).toEqual([1,2,3,4,5]);
  })

})