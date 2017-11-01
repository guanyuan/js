var reduce = require('../../src/modules/reduce')

describe('reduce', () => {
  it('# should return 4 given [1,2] with initialValue of 1', () => {
    var array = [1,2];
    var result = reduce(array, function(previous, i) {
      return previous + i;
    }, 1)
    expect(result).toEqual(4);
  })
  
  it('# should return reduced array', () => {
    var array = [{name: 'nan', age: 23}, {name: 'bei', age: 32}];
    var result = reduce(array, function(previous, i) {
      return previous + i.name + ' ';
    }, 'Hello ')
    expect(result).toEqual('Hello nan bei ');
  })
})