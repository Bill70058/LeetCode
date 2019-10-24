/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let answer = [];
    for(let i = 0; i < nums2.length; i++){
        if(nums1.includes(nums2[i]) && !answer.includes(nums2[i])){
            answer.push(nums2[i]);
        }
    }
    return answer;
};

module.exports = intersection;