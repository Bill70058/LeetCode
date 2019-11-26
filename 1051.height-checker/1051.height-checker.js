/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let count = 0;
    let copyHeights = Array.from(heights);
    copyHeights.sort((a, b) => a - b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != copyHeights[i]) {
            count++;
        }
    }
    return count;
};

module.exports = heightChecker;