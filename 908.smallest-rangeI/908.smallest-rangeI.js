/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let min = A[0],max = A[0];
    for(let n of A){
        min = Math.min(min,n);
        max = Math.max(max,n);
    }
    return Math.max(0,max-min-2*K);
};

module.exports = smallestRangeI;