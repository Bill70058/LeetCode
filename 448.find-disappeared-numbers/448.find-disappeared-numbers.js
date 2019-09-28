/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // 创建一个数组
      var res = new Array();
        for (let i = 0; i < nums.length; i++) {
            //取元素的值-1
            var val = Math.abs(nums[i]) - 1;    // 3 - 2 - 1 - 6 - 7 - 1 - 2 - 0
            //如果元素的值-1为下标取元素的值，值大于0，则将该元素的值改变符号
            if (nums[val] > 0) {                // [-4,-3,-2,-7,8,2,-3,-1]
                nums[val] = -nums[val];
            }
        }
        for (let i = 0; i < nums.length; i++) {
            //如果该元素大于0，则将该元素的索引+1推入全局数组
            if (nums[i] > 0) {
                res.push(i + 1);
            }
        }
        return res;
};

module.exports = findDisappearedNumbers;