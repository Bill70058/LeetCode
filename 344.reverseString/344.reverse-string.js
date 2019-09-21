/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var L = s.length-1;
    for(let i = 0; i < s.length/2; i++){
        let temp = s[i];
        s[i] = s[L];
        s[L] = temp;
        L--;
    }
    return s;
};

module.exports = reverseString;