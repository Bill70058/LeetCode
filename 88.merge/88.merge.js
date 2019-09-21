/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var j = 0;
    for(let i = m; i < nums1.length; i++){
        nums1[i] = nums2[j++];
    }
    return nums1.sort((a,b)=>{return a-b;});
};

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
// console.log(merge([0],0,[1],1));
module.exports = merge;