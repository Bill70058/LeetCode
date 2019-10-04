/**
 * @param {外部传入的数组} nums
 * @param {用于计算0个数的数组} count
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
    var temp = [];
    for(let i = 0; i < nums.length; i++){
        nums[i] == 0?count++:temp.push(nums[i]);
    }
    while(count != 0){
        temp.push(0);
        count--;
    }
    for(let i = 0,len = nums.length; i < len; i++){
        nums[i] = temp[i];
    }
    return nums;

};

console.log(moveZeroes([0,0,1]))
module.exports = moveZeroes;