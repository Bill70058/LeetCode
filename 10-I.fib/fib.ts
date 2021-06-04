/**
 * @author: Bill
 * @method: 
 * @param {number} n
 * @Date: 2021-06-04 16:34:18
 * @Description: 使用动态规划
 * @return {*}
 */
function fib(n: number): number {
  let a: number = 0, b: number = 1
  let sum: number
  for(let i = 0; i < n; i++) {
      sum = (a+b) % 1000000007
      a = b
      b = sum
  }
  return a
};