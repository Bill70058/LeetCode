/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function (A, K) {
    //排序，如果最小的几个数是负数并且K还有余额则取反
    A.sort((a, b) => a - b);
    for (let i = 0; i < A.length; i++) {
        if (A[i] < 0 && K > 0) {
            A[i] = -A[i];
            K--;
        }
    }
    //取反后再排序，如果还需要取反一个数，则把最小的数取反，这样对总和的影响最小
    A.sort((a, b) => a - b);
    if (K % 2 !== 0) {
        A[0] = -A[0];
    }

    return A.reduce((total, num) => {
        return total += num;
    });


};

module.exports = largestSumAfterKNegations;