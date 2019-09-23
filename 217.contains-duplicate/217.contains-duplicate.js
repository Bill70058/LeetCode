/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        var count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j]){
                count++;
            }
        }
        if(count >= 2){
            return true;
        }
    }
    return false;
};

module.exports = containsDuplicate;