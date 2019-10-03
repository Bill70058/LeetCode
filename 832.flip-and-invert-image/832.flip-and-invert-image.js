/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for(let i = 0,len = A.length; i < len; i++){
        for(let j = 0; j < A[0].length; j++){
            A[i][j] = (A[i][j] == 0?1:0);
        }
    }
    for(let i = 0,len = A.length; i < len; i++){
        A[i] = A[i].reverse();
    }
    return A;
};

module.exports = flipAndInvertImage;