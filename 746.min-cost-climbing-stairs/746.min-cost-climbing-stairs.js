/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let len = cost.length;
    for (let i = 2; i < len; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }
    return cost[len - 1] > cost[len - 2] ? cost[len - 2] : cost[len - 1];
};

module.exports = minCostClimbingStairs;