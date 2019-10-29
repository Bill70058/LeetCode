/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
    let count = [];
    let half = candies.length / 2;
    for (let num of candies) {
        if (!count.includes(num)) {
            count.push(num);
        }
    }
    return Math.min(count.length, half);

};

module.exports = distributeCandies;