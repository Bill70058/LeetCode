/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if(nums.length === 0){
        return false;
    }
    let count = 0;
    for(let i = 0,len = nums.length-1; i < len; i++){
        if(nums[i] > nums[i+1]){
            count++;
            if(count > 1){
                return false;
            }
            if(i-1 >= 0 && nums[i-1] > nums[i+1]){
                nums[i+1] = nums[i];
            }else {
                nums[i] = nums[i+1]
            }
        }
    }
    return true;
};