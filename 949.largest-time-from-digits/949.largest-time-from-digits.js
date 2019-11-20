/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function (A) {
    A.sort((a, b) => a - b);
    for (let i = 3; i >= 0; i--) {
        if (A[i] > 2) {
            continue
        };
        for (let j = 3; j >= 0; j--) {

            //用过的数字不能再用，当第一个数是2时第二个数不能超过3
            if (j == i || A[i] == 2 && A[j] > 3) {
                continue
            };
            for (let k = 3; k >= 0; k--) {
                if (k == i || k == j || A[k] > 5) {
                    continue
                };
                //因为只有四个数，元素下标分别为 0，1，2，3 加起来元素的总下标值为6，所以最后一个数的下标值只能是 6-i-j-k
                return "" + A[i] + A[j] + ':' + A[k] + A[6 - i - j - k];
            }
        }
    }
    return "";
};


module.exports = largestTimeFromDigits;