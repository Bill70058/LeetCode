/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let count = 0;
    for(let i = 1; i <= N; i++){
        if(isHao(i)){
            count++;
        }
    }
    return count;
};

function isHao(num){
    let mapOne = [2,5,6,9,0,1,8],mapTwo = [2,5,6,9];
    let countOne = 0,countTwo = 0,digit = 0;
    while(num){
        let yu = -1;
        yu = num % 10;
        digit++;
        num = parseInt(num/10);
        if(mapOne.includes(yu)){
            if(mapTwo.includes(yu)){
                countTwo++;
            }else{
                countOne++;
            }
            
        }
    }
    if(countOne+countTwo === digit && countTwo > 0){
        return true;
    }
    return false;
}

module.exports = rotatedDigits;