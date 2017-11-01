module.exports = function(arr, fn, ctx) {
  var result = [];
  arr.forEach(function(item, index, array) {
    result.push(fn.call(ctx, item, index, array))
  })
  return result;
}