/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function (a, b, c) {
    if (b < a) {
        [a, b] = [b, a];
    }
    if (c < b) {
        [b, c] = [c, b];
    }
    if (b < a) {
        [a, b] = [b, a];
    }
    let count = c - a - 2;
    if (c - b === 1 && b - a === 1) {
        return [0, 0];
    }
    if (c - b <= 2 || b - a <= 2) {
        return [1, count];
    }
    return [2, count];
};

module.exports = numMovesStones;