/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(str) {
    let answer = 0;
    for(let i in str){
        answer *= 26;
        answer += str.charCodeAt(i) - 64;
    }
    return answer;
};

module.exports = titleToNumber;