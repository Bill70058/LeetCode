/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if(n <= 0){
        return '';
    }
    let str = '';
    while(n>0){
        n--;
        str += String.fromCharCode(n%26+65);
        n = parseInt(n/26);
    }
    return str.split('').reverse().join('');
};

module.exports = convertToTitle;