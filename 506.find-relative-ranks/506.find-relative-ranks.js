/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var arr = Array.from(nums);
    arr.sort((a,b)=>{
        return b-a;
    });
    nums[nums.indexOf(arr[0])] = 'Gold Medal';
    nums[nums.indexOf(arr[1])] = 'Silver Medal';
    nums[nums.indexOf(arr[2])] = 'Bronze Medal';
    for(let i = 3,len = nums.length; i < len; i++){
        nums[nums.indexOf(arr[i])] = (i+1)+'';
    }
    return nums;
};

module.exports = findRelativeRanks;
console.log(findRelativeRanks([5, 4, 3, 2, 1]))