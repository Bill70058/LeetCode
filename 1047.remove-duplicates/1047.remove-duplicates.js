/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let len = 0;
    let answer = [];
    for (let i = 0; i < S.length; i++) {
        if (len !== 0 && answer[answer.length - 1] === S[i]) {
            answer.pop();
            len--;
        } else {
            answer.push(S[i]);
            len++;
        }
    }
    return answer.join('');
};

module.exports = removeDuplicates;