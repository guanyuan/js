module.exports = function(arr, fn) {
  var result = [];
  arr.forEach(function(item) {
    result.push(fn(item))
  })
  return result;
}