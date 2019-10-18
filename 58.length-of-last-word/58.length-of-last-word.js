/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s === " "){
        return 0;
    }
    if(s.length === 1){
        return 1;
    }
    let answer = s.split(' ');
    answer = answer[answer.length-1].length;
    return answer;
};


module.exports = lengthOfLastWord;