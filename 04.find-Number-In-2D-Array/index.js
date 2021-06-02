/**
 * @author: Bill
 * @method: 
 * @param {*} matrix
 * @param {*} target
 * @Date: 2021-06-02 11:25:26
 * @Description: 剑指 Offer 04. 二维数组中的查找
 * @return {*}
 */
var findNumberIn2DArray = function (matrix, target) {
  for (let arr of matrix) {
    if (arr.includes(target)) {
      return true
    }
  }
  return false
};

module.exports = findNumberIn2DArray