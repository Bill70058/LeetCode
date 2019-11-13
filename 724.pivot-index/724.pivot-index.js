/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    let sum = 0,
        sumLeft = 0,
        len = nums.length;
    for (let num of nums) {
        sum += num;
    }
    for (let i = 0; i < len; i++) {
        if (sumLeft === (sum - sumLeft - nums[i])) {
            return i;
        }
        sumLeft += nums[i];
    }
    return -1;
};

module.exports = pivotIndex;