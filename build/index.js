(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.index = mod.exports;
  }
})(this, function () {
  "use strict";

  /**
   * Created by Administrator on 2016/12/26.
   */
  //--watch  是时刻在监听的

  var sum = function sum(a, b) {
    "use strict";

    return a + b;
  };
  var res = sum(2, 3);
  console.log(res);
});