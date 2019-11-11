/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let max = Math.max.apply(null, nums);
    let index = nums.indexOf(max);
    for (let num of nums) {
        if (num === max) {
            continue;
        }
        if (num * 2 > max) {
            return -1;
        }
    }
    return index;
};

module.exports = dominantIndex;