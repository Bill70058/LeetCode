/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let arr = [];
    for (let i = 1; i <= numRows; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
            //如果是左边界或者右边界则插入 1
            if (j == 0 || j == i - 1) {
                row.push(1);
            } else {
                //因为是从1开始的，所以去到上一行需要减二
                row.push(arr[i - 2][j - 1] + arr[i - 2][j])
            }
        }
        arr.push(row);
    }
    return arr;
};


module.exports = generate;