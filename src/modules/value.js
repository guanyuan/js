function value(anything) {
  return (Object.prototype.toString.call(anything) !== '[object Function]')? anything : value(anything());
}

module.exports = value;