/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (string, numRows) {
    if (numRows == 1)
        return string;

    let len = Math.min(string.length, numRows);
    let rows = Array.from({
        length: len
    }, () => "");
    let index = 0;
    let down = false;

    for (let character of string) {
        rows[index] += character;
        if (index == 0 || index == numRows - 1)
            down = !down;
        index += down ? 1 : -1;
    }

    let answer = "";
    for (let row of rows) {
        answer += row;
    }
    return answer;
};

module.exports = convert;