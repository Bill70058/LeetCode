/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    costs.sort((num1, num2) => {
        return num1[0] - num1[1] - (num2[0] - num2[1]);
    });
    let total = 0;
    let half = costs.length / 2;
    for (let i = 0; i < half; i++) {
        total += costs[i][0] + costs[i + half][1];
    }
    return total;
};

module.exports = twoCitySchedCost;