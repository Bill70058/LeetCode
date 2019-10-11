/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function(nums) {
    let numCopy = Array.from(nums);
    let min = 0,max = 0;
    numCopy.sort((a,b)=>{
        return a-b;
    });
    if(isArrayEquals(nums,numCopy)){
        return 0;
    }
    for(let i = 0,len = nums.length; i < len; i++){
        if(nums[i] !== numCopy[i]){
            min = i;
            break;
        }
    }
    for(let j = nums.length-1; j >= 0; j--){
        if(nums[j] !== numCopy[j]){
            max = j;
            break;
        }
    }
    return max-min+1;
};


function isArrayEquals(a,b){
    for(let i in a){
        if(a[i] !== b[i])
            return false;
    }
    return true;
}

module.exports = findUnsortedSubarray;