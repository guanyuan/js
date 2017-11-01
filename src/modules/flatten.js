var flatten = function(array) {
  return array.reduce(function(previous, i) {
    if (Object.prototype.toString.call(i) !== '[object Array]') {
      previous.push(i);
      return previous;
    }
    Array.prototype.push.apply(previous, flatten(i));
    return previous;
  }, []);
};

module.exports = flatten;