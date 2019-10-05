/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    //因为 1，不是完美数，奇数也不是完美数
    if((num === 1)||(num % 2 !== 0)){
        return false;
    }
    //遍历从二开始，因为 1 不是完美数。因为正整数的正因子一定包含 1，所以总和从1 开始。
    var i = 2,sum = 1;
    //以平方根为上界
    var sqrt = Math.sqrt(num);
    for(;i < sqrt; i++){
        if(num % i == 0){
            sum += i;
            sum += num/i;
        }
    }
    //最后，循环结束还会进行一次i++，此时i为sqrt，所以加上。如果在循环中加的话会加两次 -- sum+=i -> 一次，sum += num/i -> 两次
    if(i * i == num){
        sum += i;
    }
    return sum===num?true:false;
};

module.exports = checkPerfectNumber;