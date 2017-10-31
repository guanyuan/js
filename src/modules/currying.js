module.exports = function(func) {
  var len = func.length;//获取一个函数形參的个数
  
  var getCurry = function(params) {
    return function() {
      //参数拼接
      var next = params.concat(Array.prototype.slice.call(arguments));
      //持续接收的参数已经满足当初原始函数的形參个数，执行原始函数，返回结果
      if(len - next.length <= 0) {
        return func.apply(this, next);
      }
      //不满足个数，将已经获取的参数继续递归
      return getCurry(next);
    };
  };
  
  return getCurry([]);
}