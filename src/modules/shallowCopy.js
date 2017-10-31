module.exports = function(value) {
  return Object.assign((Object.getPrototypeOf(value).constructor)(), value);
}