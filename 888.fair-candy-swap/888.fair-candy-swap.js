/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function (A, B) {
    let answer = [],
        sumA = 0,
        sumB = 0,
        difference = 0,
        i = 0,
        j = 0;
    for (let num of A) {
        sumA += num;
    }
    for (let num of B) {
        sumB += num;
    }
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    difference = parseInt(sumA - parseInt((sumA + sumB) / 2))
    while (i < A.length && j < B.length) {
        if (A[i] - B[j] === difference) {
            answer[0] = A[i];
            answer[1] = B[j];
            break;
        } else if (A[i] - B[j] < difference) {
            i++;
        } else {
            j++;
        }
    }
    return answer;
};


module.exports = fairCandySwap;