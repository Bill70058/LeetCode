/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // var sum;
    // while(num >= 10){
    //     sum = 0;
    //     // 如果 num 等于0则退出循环
    //     while(num){
    //         let temp = num%10;
    //         sum += temp;
    //         num = parseInt(num/10);
    //     }
    //     num = sum;
    // }
    // return num;
    if(num>9){
        num %= 9;
        if(num == 0){
            return 9;
        }
    }
    return num;
};

module.exports = addDigits;