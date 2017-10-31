function Parent(name) {
  this.name = name;
}

Parent.prototype.getName = function() {
  return this.name;
};


function Son(parentName, name) {
  Parent.call(this, parentName);
  this.childName = name;
}

Son.prototype = new Parent("");
Son.prototype.constructor = Son;
Son.prototype.getChildrenName = function() {
  return this.childName;
}

module.exports.Parent = Parent;
module.exports.Son = Son;