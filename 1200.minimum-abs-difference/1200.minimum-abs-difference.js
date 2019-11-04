/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    let answer = [];
    arr.sort((a, b) => a - b);
    let min = Math.abs(arr[1] - arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i - 1] === min)) {
            let count = [];
            count.push(arr[i - 1]);
            count.push(arr[i]);
            answer.push(count);
        } else if (Math.abs(arr[i] - arr[i - 1]) < min) {
            answer = [];
            let count = [];
            count.push(arr[i - 1]);
            count.push(arr[i]);
            answer.push(count);
            min = arr[i] - arr[i - 1];
        }
    }
    return answer;
};

module.exports = minimumAbsDifference;