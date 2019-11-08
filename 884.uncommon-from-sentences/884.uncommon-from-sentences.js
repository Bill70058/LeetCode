/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    let answer = [];
    A = A.split(' ');
    B = B.split(' ');
    for (let i = 0; i < A.length; i++) {
        if (A.indexOf(A[i]) === A.lastIndexOf(A[i]) && !B.includes(A[i])) {
            answer.push(A[i]);
        }
    }

    for (let i = 0; i < B.length; i++) {
        if (B.indexOf(B[i]) === B.lastIndexOf(B[i]) && !A.includes(B[i])) {
            answer.push(B[i]);
        }
    }
    return answer;
};

module.exports = uncommonFromSentences;