/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let arr = [];
    for (let i = 1; i <= rowIndex + 1; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
            if (j === 0 || j === i - 1) {
                row.push(1);
            } else {
                row.push(arr[i - 2][j - 1] + arr[i - 2][j]);
            }
        }
        arr.push(row);
    }
    return arr[rowIndex];
};

module.exports = getRow;