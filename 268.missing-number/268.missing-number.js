/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var n = nums.length+1;
    nums.sort((a,b)=>{
        return a-b;
    })
    for(let i = 0; i < n; i++){
        if(nums[i] !== i){
            return i;
        }
    }
};

// console.log(missingNumber([3,0,1]))

module.exports = missingNumber;