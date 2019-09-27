/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //面积最大值
    var maxarea = 0;
    for (let i = 0; i < height.length; i++)
        for (let j = i + 1; j < height.length; j++)
        // 对比 最大值(max) 与 (第i 个元素和第 j个元素，挑选出短板，算出短板的面积)，再用这个面积和面积最大值比，挑出最大值
            maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
    return maxarea;
};

// maxArea([1,8,6,2,5,4,8,3,7]);
module.exports = maxArea;