/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let answer = 0;
    let cp = new Array(100);
    for (let i = 0; i < 100; i++) {
        cp[i] = 0;
    }
    for (let arr of dominoes) {
        arr.sort();
        answer += cp[arr[0] * 10 + arr[1]]++;
    }
    return answer;
};

module.exports = numEquivDominoPairs;