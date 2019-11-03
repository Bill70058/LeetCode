/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
    let odd = 0,
        even = 0;
    for (let i = 0; i < chips.length; i++) {
        if (chips[i] % 2 === 0) {
            even++;
        }
        if (chips[i] % 2 !== 0) {
            odd++;
        }
    }
    return Math.min(even, odd);
};

module.exports = minCostToMoveChips;