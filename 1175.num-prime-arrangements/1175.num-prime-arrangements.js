/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
    let MOD = 10 ** 9 + 7;

    function A(n, m) {
        return (m === 0 ? 1 : A(n, m - 1) * (n - m + 1)) % MOD;
    }

    function isPrime(a) {
        if (a < 2) return false;
        if (a === 2) return true;
        for (let i = 2; i < a; i++) {
            if (a % i === 0) return false;
        }
        return true;
    }

    //将整数拆分成两部分分别运算再相加整合
    function split(a, b) {
        //将b拆成2部分
        let partOne = Math.floor(b / 100000),
            partTwo = b % 100000
        let sum = 0
        for (let i = 0; i < partOne; i++) {
            sum = (sum + 100000 * a) % MOD
        }
        sum = (sum + partTwo * a) % MOD
        return sum
    }

    let numPrime = 0;
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            numPrime++;
        }
    }

    let a = A(numPrime, numPrime);
    let b = A(n - numPrime, n - numPrime);

    return split(a, b) % MOD;
};

module.exports = numPrimeArrangements;