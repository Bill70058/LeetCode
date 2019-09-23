/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var half = nums.length/2;
    for(let i = 0; i < nums.length; i++){
        var count = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j]){
                count++;
            }
        }
        if(count > half){
            return nums[i];
        }
    }

        return -1;    
};

module.exports = majorityElement;