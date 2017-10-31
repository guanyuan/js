var result = [];

function flatten(arr) {
  for(var i = 0; i< arr.length; i++) {
    if(Object.prototype.toString.call(arr[i]) !== '[object Array]') {
      result.push(arr[i]);
    } else {
      flatten(arr[i]);
    }
  }
  return result;
}

module.exports = flatten;