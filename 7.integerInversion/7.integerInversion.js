/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var rev = 0;
    var INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    while (x != 0) {
        let pop = x % 10;       //将整数一个个从最后取余抽出再通过 ‘*10’ 插入变量rev
        x /= 10;                //取余抽出的数将被除为小数再通过 parseInt去除，否则while 判断条件永远成立死循环
        x = parseInt(x);    
        if (rev > INT_MAX/10 || (rev == INT_MAX / 10 && pop > 7)) return 0;
        if (rev < INT_MIN/10 || (rev == INT_MIN / 10 && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
};

let a = reverse(9147483647);
console.log(a);