/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
    target = Math.abs(target);
    let count = 0;
    let sum = 0;
    while (sum < target) {
        count++;
        sum += count;
    }
    let difference = sum - target;
    if (difference % 2 === 0) {
        return count;
    } else {
        return count % 2 === 0? count + 1:count + 2;
    }
};

module.exports = reachNumber;