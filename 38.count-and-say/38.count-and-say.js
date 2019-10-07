/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    //结果字符串，输出报数数列的结果
    var resultStr = "1";
    for (var i = 1; i < n; i++) {
      //定义重复次数，如“11”被读作“2个1”，其中的“2”就是重复次数
      var repeatCount = 1;
      var str = "";
      for (var j = 0; j < resultStr.length; j++) {
        //找出相邻相同项，增加重复次数
        if (resultStr[j] == resultStr[j+1]) {
          repeatCount++;
        }else{
          //存放每次迭代的结果，为上次结果 + 重复次数 + 当前字符
          str += repeatCount + resultStr[j];
          //重置重复次数
          repeatCount = 1;
        }
      }
      //迭代完毕，将str赋给resultStr
      resultStr = str;
    }
    return resultStr;
  };

  module.exports = countAndSay;
console.log(countAndSay(2));