/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let max = Number.MIN_VALUE,imax = 1,imin = 1;
    for(let i = 0,len = nums.length; i < len; i++){
        if(nums[i] < 0){
            [imax,imin] = [imin,imax];
        }
        imax = Math.max(imax*nums[i],nums[i]);
        imin = Math.min(imin*nums[i],nums[i]);
        
        max = Math.max(max,imax);
    }
    return max;
};

module.exports = maxProduct;