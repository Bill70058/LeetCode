/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let list = [];
    for (let i = left; i <= right; i++) {
        if (isDivisionMath(i)) {
            list.push(i);
        }
    }
    return list;
};

//判断是否是自除数
function isDivisionMath(n) {
    let value = n;
    while (value > 0) {
        if (value % 10 !== 0 && (n % parseInt(value % 10)) === 0) {
            value = parseInt(value / 10);
        } else {
            return false;
        }
    }
    return true;
}

module.exports = selfDividingNumbers;