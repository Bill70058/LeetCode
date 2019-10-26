/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let index = -1;
    for (let character of s) {
        index = t.indexOf(character, index + 1);
        if (index === -1) {
            return false;
        }
    }
    return true;
};

module.exports = isSubsequence;