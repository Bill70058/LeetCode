/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let j = 1;
    for(let i = 0; i < A.length; i+=2){
        //如果偶数位上找到奇数的话循环在奇数位上找偶数，找到交换两个元素位置
        if(A[i] % 2 === 1){
            while(A[j] % 2 === 1){
                j+=2;
            }
            [A[i],A[j]] = [A[j],A[i]];
        }
    }
    return A;
};

module.exports = sortArrayByParityII;