/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function (A) {
    let answer = [];
    let count = 0;
    for (let num of A) {
        count *= 2;
        count += num;
        count %= 10;
        answer.push(count % 5 === 0);
    }
    return answer;
};

module.exports = prefixesDivBy5;