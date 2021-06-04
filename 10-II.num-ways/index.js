/**
 * @author: Bill
 * @method:
 * @param {number} n
 * @Date: 2021-06-04 16:59:16
 * @Description: 剑指 Offer 10- II. 青蛙跳台阶问题
 * @return {*}
 */
function numWays(n) {
    var a = 1, b = 1;
    var sum;
    for (var i = 0; i < n; i++) {
        sum = (a + b) % 1000000007;
        a = b;
        b = sum;
    }
    return a;
}
;
