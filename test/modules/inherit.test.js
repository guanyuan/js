var inherit = require('../../src/modules/inherit')
var Parent = inherit.Parent;
var Son = inherit.Son;

describe('inherit', () => {
  it('# should get Parent instance', () => {
    var parent = new Parent('parent');
    expect(parent.name).toBe('parent');
  })
  
  it('# should get Son instance', () => {
    var son = new Son('parent', 'child');
    expect(son.childName).toBe('child');
  })
  
  it('# should get parent name from son obj', () => {
    var son = new Son('parent', 'child');
    expect(son.getName()).toBe('parent');
  })
})