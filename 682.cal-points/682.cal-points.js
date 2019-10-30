/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let i = 0,
        sum = 0;
    let arr = [];
    for (let character of ops) {
        switch (character) {
            case '+':
                arr[i] = arr[i - 1] + arr[i - 2];
                i++;
                break;
            case 'D':
                arr[i] = arr[i - 1] * 2;
                i++;
                break;
            case 'C':
                arr[i - 1] = 0;
                i--;
                break;
            default:
                arr[i] = Number(character);
                i++;
                break;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    return sum;
};

module.exports = calPoints;