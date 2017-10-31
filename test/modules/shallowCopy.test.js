var shallowCopy = require('../../src/modules/shallowCopy')

describe('shallowCopy', () => {
  it('#should shallowCopy given array', () => {
    var value = [1,2,3]
    var result = shallowCopy(value);
    expect(result).toEqual([1,2,3]);
    
    result[0] = 0;
    expect(value[0]).toBe(1);
  })

  it('#should shallowCopy given object {user: {name: "hello"}}', () => {
    var value = {user: {name: "hello"}};
    var result = shallowCopy(value);
    result.user.name = 'world';
    expect(value.user.name).toBe('world');
  })
  
  it('#should shallowCopy given object', () => {
    var value = {name: 'hello'};
    var result = shallowCopy(value);
    result.name = 'world';
    expect(value.name).toBe('hello');
  })
})