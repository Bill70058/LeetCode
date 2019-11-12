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
    let dt = sum - target;
    if (dt % 2 === 0) {
        return count;
    } else {
        if (count % 2 === 0) {
            return count + 1;
        } else {
            return count + 2;
        }
    }
};

module.exports = reachNumber;