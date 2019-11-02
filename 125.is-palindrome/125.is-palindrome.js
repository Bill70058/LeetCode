/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (s === null) {
        return true;
    }
    s = s.toLowerCase();
    let len = s.length;
    let str = '';
    for (let character of Array.from(s)) {
        if ((character >= '0' && character <= '9') || (character >= 'a' && character <= 'z')) {
            str += character;
        }
    }
    return str == str.split('').reverse().join('');
};

module.exports = isPalindrome;