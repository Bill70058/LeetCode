/**
 * @author: Bill
 * @method: 
 * @param {*} s
 * @Date: 2021-06-02 14:51:21
 * @Description: 剑指 Offer 05. 替换空格
 * @return {*}
 */
var replaceSpace = function (s) {
  let str = Array.prototype.map.call(s, item => item === ' ' ? '%20' : item)
  return str.join('')
};

module.exports = replaceSpace