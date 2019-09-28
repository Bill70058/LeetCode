/**
 * @param {外部传入的数组} nums
 * @param {用于计算0个数的数组} count
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            let temp = nums.splice(i,1);
            count = count.concat(temp);
        }
    }
    nums = nums.concat(count);
    return nums;
};

module.exports = moveZeroes;