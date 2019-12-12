/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s == null || s.length < 1) return "";
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - parseInt((len - 1) / 2);
            end = i + parseInt(len / 2);
        }
    }
    return s.substring(start, end + 1);
};


function expandAroundCenter(s,left,right){
    let L = left, R = right;
    while (L >= 0 && R < s.length && s[L] == s[R]) {
        L--;
        R++;
    }
    return R - L - 1;
}

module.exports = longestPalindrome;