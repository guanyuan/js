module.exports = function(array, fn, initialValue) {
  var result = initialValue;
  for(var i = 0; i< array.length; i++) {
    result = fn.call(null, result, array[i])
  }
  
  return result;
}