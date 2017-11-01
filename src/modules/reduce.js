module.exports = function(array, fn, initialValue) {
  
  var stepForward = (typeof initialValue === 'undefined') ? 1 : 0;
  var result = (typeof initialValue === 'undefined')? array[0] : initialValue;
  
  array
    .slice(stepForward)
    .forEach(function(value, index) {
      result = fn.call(null, result, value)
    })
  
  return result;
}