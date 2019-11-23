/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
    let index = 0;
    let count = [];
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            count[index++] = [i, j];
        }
    }

    count.sort((num1, num2) => {
        let sum1 = Math.abs(num1[0] - r0) + Math.abs(num1[1] - c0);
        let sum2 = Math.abs(num2[0] - r0) + Math.abs(num2[1] - c0);
        return sum1 - sum2;
    });
    return count;
};

module.exports = allCellsDistOrder;