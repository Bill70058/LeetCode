/**
 * @author: Bill
 * @method: 
 * @param {*}
 * @Date: 2021-06-02 10:02:32
 * @Description: 剑指 Offer 03. 数组中重复的数字
 * @return {*}
 */
var findRepeatNumber = function (nums) {
  if (nums.length === 0) return -1;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) return nums[i];
      let temp = nums[i]
      nums[i] = nums[temp]
      nums[temp] = temp
    }
  }
  return -1
};

module.exports = findRepeatNumber