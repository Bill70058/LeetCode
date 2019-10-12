/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length <= 1){
        return nums.length;
    }
  let count = 1,answer = 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i+1]>nums[i]){
            count++;
        }else {
            count = 1;
        }
        answer = count > answer ? count : answer;
    }
    return answer;
};

module.exports = findLengthOfLCIS;