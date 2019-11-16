/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    let len = A.length;
    let increment, decrement;
    if (len === 1) {
        return true;
    }
    for (let i = 0; i < len; i++) {
        if (A[i] < A[i + 1]) {
            increment = true;
        }
        if (A[i] > A[i + 1]) {
            decrement = true;
        }
    }
    if (increment&& decrement) {
        return false;
    }
    return true;
};

module.exports = isMonotonic;