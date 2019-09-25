/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var L = nums.length;
    nums.sort((a,b)=>{
        return a-b;
    })
    return nums[L-k];
};

module.exports = findKthLargest;