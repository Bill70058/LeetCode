/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
    let count = 0;
    for (let i = L; i <= R; i++) {
        if (isPrime(countCore(i))) {
            count++;
        }
    }
    return count;
};

/**
 * 计算置位位数
 */
function countCore(num) {
    let count = 0;
    while (num) {
        //去除二进制数最后一位1
        num &= num - 1;
        count++;
    }
    return count;
}

/**
 * 计算置位位数是否是质数
 */
function isPrime(num) {
    if (num === 2) {
        return true;
    }
    //除2以外的偶数
    if (num === 1 || (num % 2) === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

module.exports = countPrimeSetBits;