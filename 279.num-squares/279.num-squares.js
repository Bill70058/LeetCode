/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (num) {
    //先根据上面提到的公式来缩小n
    while (num % 4 === 0) {
        num = parseInt(num / 4);
    }
    //如果满足公式 则返回4
    if (num % 8 === 7) {
        return 4;
    }
    let a = 0;
    //在判断缩小后的数是否可以由一个数的平方或者两个数平方的和组成
    while ((a * a) <= num) {
        let b = parseInt(Math.sqrt((num - a * a)));
        if (a * a + b * b === num) {
            //如果可以 在这里返回
            if (a !== 0 && b !== 0) {
                return 2;
            } else {
                return 1;
            }
        }
        a++;
    }
    //如果不行 返回3
    return 3;
};

module.exports = numSquares;