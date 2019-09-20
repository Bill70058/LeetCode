/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var num = nums[0];
    var sum = 0;
    for(let i = 0; i < nums.length; i++){
        if(sum+nums[i] > nums[i]){
            sum+=nums[i];
        }else {
            sum = nums[i];
        }
        num = Math.max(sum,num);
    }
    return num;
};

module.exports = maxSubArray;