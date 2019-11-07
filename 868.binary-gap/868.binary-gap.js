/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
    let max = 0,
        count = 0;
    while (N >= 1) {
        if (N % 2 === 0 && count > 0) {
            count++;
        } else if (N % 2 === 1) {
            max = Math.max(max, count);
            count = 1;
        }

        //去掉末尾的0
        N >>= 1;
    }
    return max;
};

module.exports = binaryGap;