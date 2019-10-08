/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target);
    if(index > -1){
        return index;
    }
    if(nums[nums.length-1] < target) {
           return nums.length;
    }
    
    for(let i = 0,len = nums.length; i < len; i++){
        if(nums[i] > target){
            return i;
        }
    }
    
};

console.log(searchInsert([1,3,5,6],5))
// searchInsert([1,3,5,6],5);

module.exports = searchInsert;