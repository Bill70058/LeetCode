/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    s  =  s.trim();
    s = s.split(' ');
    for(let i = 0; i < s.length; i++){
        if(s[i] === ''){
            s.splice(i,1);
            i--;
        }
    }
    s = s.reverse().join(' ');
    return s;
};

// reverseWords("a good   example");
module.exports = reverseWords;