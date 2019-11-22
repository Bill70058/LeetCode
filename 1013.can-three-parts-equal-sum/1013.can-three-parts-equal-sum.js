/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    let sum = A.reduce((total, num) => {
        return total += num;
    });
    if (sum % 3 !== 0) {
        return false;
    }
    let average = parseInt(sum / 3);

    let i = 0,
        j = A.length - 1;
    let response = false;
    let left = 0,
        right = 0;
    while (i < j) {
        if (left !== average) {
            left += A[i];
            i += 1;
        }
        if (right !== average) {
            right += A[j];
            j -= 1;
        }
        if ((left === average) && (right === average)) {
            response = true;
            break;
        }
    }
    return response;
};

module.exports = canThreePartsEqualSum;