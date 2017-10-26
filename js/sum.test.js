const sum = require('./sum');

describe('test sum', () => {
  it('should return 3 when add 1 and 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
});