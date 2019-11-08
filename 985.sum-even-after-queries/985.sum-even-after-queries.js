/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    let answer = [],
        sum = 0;
    for (let num of A) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    for (let i = 0; i < queries.length; i++) {
        if (A[queries[i][1]] % 2 === 0) {
            sum -= A[queries[i][1]];
        }
        A[queries[i][1]] += queries[i][0];
        if (A[queries[i][1]] % 2 === 0) {
            sum += A[queries[i][1]];
        }
        answer.push(sum);
    }
    return answer;
};

module.exports = sumEvenAfterQueries;