function value(what) {
  return ((typeof  what) !== 'function')? what : value(what());
}

module.exports = value;