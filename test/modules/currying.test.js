var currying = require('../../src/modules/currying')

var add = function(a, b) {
  return a+b;
}

describe('currying', () => {
  it('#should return 3 given add(1)(2)', () => {
    var curried = currying(add);
    expect(curried(1)(2)).toBe(6);
  })
})