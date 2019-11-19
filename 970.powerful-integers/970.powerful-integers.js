/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    let count = [];
    for (let i = 1; i < bound; i *= x) {
        for (let j = 1; i + j <= bound; j *= y) {
            if (!count.includes(i + j)) {
                count.push(i + j);
            }
            if (y === 1) {
                break;
            }
        }
        if (x === 1) {
            break;
        }
    }
    return count.sort((a, b) => a - b);
};

module.exports = powerfulIntegers;