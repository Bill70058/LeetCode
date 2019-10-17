/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for(let i = 0; i < A.length; i++){
        A[i] = Math.pow(A[i],2);
    }
    return A.sort((a,b)=>a-b);
};

module.exports = sortedSquares;