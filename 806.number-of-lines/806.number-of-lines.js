/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    S = S.split('');
    var count = 0;
    var line = 1;
    for(let i = 0,len = S.length; i < len; i++){
        let index = S[i].charCodeAt() - 97;
        if(100 - count < widths[index]){
            line++;
            count = 0;
        }
        count += widths[index];
    }
    return [line,count];
};

module.exports = numberOfLines;

numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],"bbbcccdddaaa");