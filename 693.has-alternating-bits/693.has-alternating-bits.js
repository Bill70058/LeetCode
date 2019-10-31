/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    let temp = n ^ (n >> 1);
    return (temp & (temp + 1)) === 0;
};

module.exports = hasAlternatingBits;