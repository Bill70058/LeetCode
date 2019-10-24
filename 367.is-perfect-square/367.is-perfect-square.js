/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    if (num === 1) {
        return true;
    }
    let N = 0,
        len = 0;
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (Math.pow(i, 2) === num) {
            N = i;
            break;
        }
    }
    len = 2 * N - 1;
    for (let i = 1; i <= len; i += 2) {
        sum += i;
    }
    return sum === num;
};

module.exports = isPerfectSquare;