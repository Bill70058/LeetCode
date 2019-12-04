/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let sum = 0,num = 0;
    for(let i = 0; i < s.length; ++i){
        num += s[i] === 'R'?1:-1;
        if(num === 0){
            sum++;
        }
    }
    return sum;
};

module.exports = balancedStringSplit;