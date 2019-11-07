/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let answer = 0;
    while (n) {
        answer++;
        //n 与 n-1 可以将原先n中的‘1’除去
        n &= n - 1;
    }
    return answer;
};
module.exports = hammingWeight;