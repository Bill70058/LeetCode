/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    });
    var n = 0;
    for(let i = 0,len = nums.length/2; i < len; i++){
        n += nums[i*2]; 
    }
    
    return n;
};

module.exports = arrayPairSum;