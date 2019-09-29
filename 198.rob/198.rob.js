/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var lastMax = 0;    //上一个偷窃的总值
    var lLastMax = 0;   //上两个偷窃的总值
    for (let i = 0; i < nums.length; i++) {
        var temp = lastMax;
        lastMax = Math.max(lLastMax + nums[i], lastMax);
        lLastMax = temp;
    }
    return lastMax;
};

module.exports = rob;