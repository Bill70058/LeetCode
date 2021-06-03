/**
 * @author: Bill
 * @method: 
 * @param {*}
 * @Date: 2021-06-03 17:19:50
 * @Description: 剑指 Offer 10- I. 斐波那契数列
 * @return {*}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) {
    return 1 % 1000000007
  }
  return fibnacci(n) % 1000000007
};

let fibnacci = function (num) {
  let nums = [0, 1]
  for (let i = 2; i <= num; i++) {
    nums.push((nums[i - 1] + nums[i - 2]) % 1000000007)
  }
  return nums.pop()
}

module.exports = fib