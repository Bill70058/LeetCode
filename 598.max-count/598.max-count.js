/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    if (ops.length === 0) {
        return m * n;
    }
    let minA = Number.MAX_SAFE_INTEGER,
        minB = Number.MAX_SAFE_INTEGER;
    for (let i = 0, len = ops.length; i < len; i++) {
        minA = Math.min(ops[i][0], minA);
        minB = Math.min(ops[i][1], minB);
    }
    return minA * minB;
};

module.exports = maxCount;