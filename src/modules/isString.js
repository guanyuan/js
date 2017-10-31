module.exports = function(str) {
  return Object.prototype.toString.call(str) === '[object String]';
}