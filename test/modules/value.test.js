var value = require('../../src/modules/value')

describe('value', () => {
  it('# should return string given string', () => {
    var what = 'The Fuck!';
    var result = value(what)
    expect(result).toEqual('The Fuck!');
  })
  
  it('# should return string given function which return string', () => {
    var what = function() {
      return 'world';
    };
    var result = value(what)
    expect(result).toEqual('world');
  })
  
  it('# should return string given function which triplely return string', () => {
    var what = function() {
      return function() {
       return function() {
         return 97856;
       }
      }
    };
    var result = value(what)
    expect(result).toEqual(97856);
  })
  
})