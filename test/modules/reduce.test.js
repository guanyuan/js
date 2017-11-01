var reduce = require('../../src/modules/reduce')

describe('reduce', () => {
  it('# should return 4 given [1,2] with initialValue of 1', () => {
    var array = [1,2];
    var result = reduce(array, function(previous, i) {
      return previous + i;
    })
    expect(result).toEqual(3);
  })
  
  it('# should return reduced string "Hello nan bei "', () => {
    var array = [{name: 'nan', age: 23}, {name: 'bei', age: 32}];
    var result = reduce(array, function(previous, i) {
      return previous + i.name + ' ';
    }, 'Hello ')
    expect(result).toEqual('Hello nan bei ');
  })
})