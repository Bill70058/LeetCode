/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let index = 0;
    for (let i = 0; i < nums1.length; i++) {
        index = nums2.indexOf(nums1[i]);
        for (let j = index; j < nums2.length; j++) {
            if (nums2[j] > nums1[i]) {
                nums1[i] = nums2[j];
                break;
            }
            if (j === nums2.length - 1 && nums2[j] <= nums1[i]) {
                nums1[i] = -1;
            }
        }
    }
    return nums1;
};

module.exports = nextGreaterElement;