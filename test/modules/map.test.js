var map = require('../../src/modules/map')

describe('map', () => {
  it('# should return mapped array', () => {
    var arr = [{name: 'hello', age: 12}, {name: 'world', age: 28}];
    var result = map(arr, function(obj) {
      return obj.age + this;
    }, 1)
    expect(result).toEqual([13, 29]);
  })
})