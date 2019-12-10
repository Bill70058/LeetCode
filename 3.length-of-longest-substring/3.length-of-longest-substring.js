/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let num = 0,
        res = 0;
    let m = '';
    for (let n of s) {
        if (m.indexOf(n) == -1) {
            m += n;
            num++;
            res = res < num ? num : res;
        } else {
            m += n;
            m = m.slice(m.indexOf(n) + 1);
            num = m.length;
        }
    }
    return res;
};

module.exports = lengthOfLongestSubstring;