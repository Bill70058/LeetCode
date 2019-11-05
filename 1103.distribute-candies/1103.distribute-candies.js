/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    let arr = new Array(num_people);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }

    let count = 1;
    while (candies !== 0) {
        for (let i = 0; i < arr.length; i++) {
            if (count > candies) {
                arr[i] += candies;
                candies = 0;
                break;
            }
            arr[i] += count;
            candies -= count;
            count++;
        }
    }
    return arr;
};

module.exports = distributeCandies;