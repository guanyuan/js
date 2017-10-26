(function() {
  function Arr2D(d) {
    if (typeof d !== 'number') throw new Error('Arr2D():arguments d must be number');
    this.d = d;
    this.arr = this.init2DArr(d);
  }
  Arr2D.prototype.reat2DArr = function() {
    var c = 0, //环数
      i = 0, //行
      j = 0, //列
      out = 1, //总数
      z,
      n = this.d,
      a = this.arr;
    //检验参数
    if (!Array.isArray(a)) throw new Error('reat2DArr():arguments a must be Array');
    if (typeof n !== 'number') throw new Error('reat2DArr():arguments n must be Number');
    z = n * n;
    while (out <= z) {
      i = 0; /*每轮后初始化下i,j*/
      j = 0;
      for (i += c, j += c; j < n - c; j++) {
        if (out > z) break;
        a[i][j] = out++;
      }
      for (j--, i = i + 1; i < n - c; i++) {
        if (out > z) break;
        a[i][j] = out++;
      }
      for (i--, j = j - 1; j >= c; j--) {
        if (out > z) break;
        a[i][j] = out++;
      }
      for (j++, i = i - 1; i > c; i--) {
        if (out > z) break;
        a[i][j] = out++;
      }
      c++;
    }
    return this;
  };
  Arr2D.prototype.printArr = function() {
    var a = this.arr,
      n = this.d,
      lineStr;
    if (!Array.isArray(a)) throw new Error('printArr():arguments a must be Array');
    for (i = 0; i < n; i++) {
      lineStr = "";
      for (j = 0; j < n; j++) {
        lineStr += ' ' + a[i][j];
      }
      console.log(lineStr);
    }
    return this;
  };
  //初始化二维矩形数组
  Arr2D.prototype.init2DArr = function(m) {
    var arr = [],
      i, j;
    for (i = 0; i < m; i++) {
      arr[i] = [];
      for (j = 0; j < m; j++) {
        arr[i][j] = 0;
      }
    }
    return arr;
  };
  //调用函数,测试数据数据为3
  var arr = new Arr2D(3);
  arr.reat2DArr().printArr();
})();