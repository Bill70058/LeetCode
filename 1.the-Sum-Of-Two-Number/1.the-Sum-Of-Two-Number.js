/**
 * 
 * @param {外部传入的数组} nums 
 * @param {两个数的目标和} target 
 * 利用冒泡排序的思路进行数组不重复便利计算两个数之和，固定住 i，让 i 和数组的其他数比较
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = 1+i; j < nums.length; j++){
            if(nums[i]+nums[j] == target){
                return [i,j];
            }
        }
    }
};
// var nums = [3,2,4];
// twoSum(nums, 6);
module.exports = twoSum;