var flatten = function(array) {
  return array.reduce(function(previous, i) {
    if (Object.prototype.toString.call(i) !== '[object Array]') {
      return (previous.push(i), previous);
    }
    return (Array.prototype.push.apply(previous, flatten(i)), previous);
  }, []);
};

module.exports = flatten;