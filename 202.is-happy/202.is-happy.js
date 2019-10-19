/**
 * @param {number} n
 * @return {boolean}
 */
const countSum = function(number) {
    let sum = 0;
    number = number.toString();
    for(let i = 0; i < number.length; i++){
        sum += Math.pow(Number(number[i]),2);
    }
    return sum;
};

const isHappy = function(number){
    if(number <= 0){
        return false;
    }
    let count = [];
    number = countSum(number);
    while(!count.includes(number) && count.length <= 1000){
        count.push(number);
        number = countSum(number);
    }
    return number === 1;
}
module.exports = isHappy;