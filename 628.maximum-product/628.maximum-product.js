/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length;
    let moduleOne = nums[len-1]*nums[len-2]*nums[len-3],moduleTwo = nums[0]*nums[1]*nums[len-1];
    return Math.max(moduleOne,moduleTwo);
};

module.exports = maximumProduct;
