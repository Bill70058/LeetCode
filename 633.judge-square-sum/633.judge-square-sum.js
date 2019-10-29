/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let sum = 0,
        i = 0;
    let j = parseInt(Math.sqrt(c));
    while (i <= j) {
        sum = i * i + j * j;
        if (sum > c) {
            j = j - 1;
        }
        if (sum < c) {
            i = i + 1;
        }
        if (sum === c) {
            return true;
        }
    }
    return false;
};

module.exports = judgeSquareSum;