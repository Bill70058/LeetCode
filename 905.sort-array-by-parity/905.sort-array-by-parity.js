/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let i = 0,j = A.length-1;
    while(i < j){
        if(A[i]%2 > A[j]%2){
            [A[i],A[j]] = [A[j],A[i]];
        }
        if(A[i] % 2 === 0){
            i++;
        }
        if(A[j] % 2 === 1){
            j--;
        }
    }
    return A;
};

module.exports = sortArrayByParity;