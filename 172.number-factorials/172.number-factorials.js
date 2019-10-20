/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function(number) {
    let count = 0;
    while(number >= 5){
        count += parseInt(number/5);
        number = parseInt(number/5);
    }
    return count;
};

module.exports = trailingZeroes;