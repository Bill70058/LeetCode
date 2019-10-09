/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    let sCopy = (s+s).slice(1,-1);
    return sCopy.includes(s);
};

// console.log(repeatedSubstringPattern('abab'));
module.exports = repeatedSubstringPattern;

