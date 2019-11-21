/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
    let num = 1;
    while (num < N) {
        num = (num << 1) + 1;
    }
    return N ^ num;
};

module.exports = bitwiseComplement;