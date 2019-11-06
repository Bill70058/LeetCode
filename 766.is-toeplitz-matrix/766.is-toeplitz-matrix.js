/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = function (matrix) {
    let count1, count2;
    for (let i = 0; i < matrix.length - 1; i++) {
        count1 = count2 = [];
        count1 = matrix[i].slice(0, matrix[i].length - 1);
        count2 = matrix[i + 1].slice(1);
        if (!isEqual(count1, count2)) {
            return false;
        }
    }
    return true;

};

function isEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

module.exports = isToeplitzMatrix;