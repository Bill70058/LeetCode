/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let minNums = nums[0],
        sum = 0;
    for (let n of nums) {
        minNums = Math.min(n, minNums);
    }
    for (let n of nums) {
        sum += n - minNums;
    }
    return sum;
};

module.exports = minMoves;