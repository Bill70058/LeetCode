/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    let len = A.length;
    let lastNum = K;
    let answer = [];

    let i = len - 1;
    while (i >= 0 || lastNum > 0) {
        if (i >= 0) {
            lastNum += A[i];
        }
        answer.unshift(lastNum % 10);
        lastNum = parseInt(lastNum / 10);
        i--;
    }
    return answer;
};

module.exports = addToArrayForm;