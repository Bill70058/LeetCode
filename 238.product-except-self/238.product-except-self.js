/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var newArr = [];
    var numsL = nums.length;
    for(let i = 0; i < numsL; i++){
        var a = 1;
        for(let j = 0; j < numsL; j++){
            if(i == j){
                ;
            }else {
                a *= nums[j];
            }
        }
        newArr.push(a);
    }
    return newArr;
};

module.exports = productExceptSelf;