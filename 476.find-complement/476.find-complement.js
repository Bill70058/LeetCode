/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(number) {
    let numberCopy = number,charLength = 0;
    while(numberCopy > 0){
        // 副本右移补零
        numberCopy >>= 1;
        //计算目标数的二进制长度并且给计算变量补1
        charLength = (charLength << 1) + 1;
    }
    //将目标数与其二进制长度补一的数字取反可以得到补数
    return number ^ charLength;
};

module.exports = findComplement;