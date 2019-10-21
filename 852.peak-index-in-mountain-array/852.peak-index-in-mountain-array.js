/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    if(A.length >= 10000 || A.length < 3){
        return null;
    }
    let left = 0,right = A.length-1;
    let middle;
    while(left < right){
        middle = parseInt((left+right)/2);
        if(A[middle-1] < A[middle] && A[middle] < A[middle+1]){
            left = middle+1;
        }
        else if(A[middle-1] > A[middle] && A[middle+1] < A[middle]){
            right = middle-1;
        }else {
            return middle;
        }
    }
    return left;
};

module.exports = peakIndexInMountainArray;