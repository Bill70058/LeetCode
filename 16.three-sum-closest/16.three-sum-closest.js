/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    // answer 以前三个数之和作为初始化
    let answer = nums[0] + nums[1] + nums[2];
    for (let i = 0, len = nums.length; i < len; i++) {
        // 类似二分查找法的思想，定义双指针
        let start = i + 1,
            end = nums.length - 1;
        // 使用下标判断，如果重叠了则遍历完
        while (start < end) {
            let sum = nums[start] + nums[end] + nums[i];
            // 比较answer与sum谁更加接近target值
            answer = Math.abs(target - sum) < Math.abs(target - answer) ? sum : answer;
            // 指针移动
            if (sum > target) {
                end--;
            } else if (sum < target) {
                start++;
            } else {
                return answer;
            }
        }
    }
    return answer;
};

module.exports = threeSumClosest;