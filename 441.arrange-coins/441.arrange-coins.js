/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    if (n === 0) {
        return 0;
    }
    if (n <= 2) {
        return 1;
    }
    let i, nCopy;
    nCopy = n;
    for (i = 1; i <= n; i++) {
        if (nCopy >= i) {
            nCopy -= i;
        } else {
            return i - 1;
        }
    }
    return i;
};

module.exports = arrangeCoins;