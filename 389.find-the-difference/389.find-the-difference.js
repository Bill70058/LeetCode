/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let count1 = 0,
        count2 = 0;
    for (let character of s) {
        count1 += character.charCodeAt();
    }

    for (let character of t) {
        count2 += character.charCodeAt();
    }
    return String.fromCharCode(parseInt(count2 - count1));


};

module.exports = findTheDifference;