/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    let sCopy = (s+s).slice(1,-1);
    return sCopy.includes(s);
    //    return (s+s).substring(1,s.length*2 -1).indexOf(s)!=-1;
};

// console.log(repeatedSubstringPattern('abab'));
module.exports = repeatedSubstringPattern;

