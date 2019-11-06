/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    let answer = [];
    text = text.split(' ');
    for (let i = 2; i < text.length; i++) {
        if (text[i - 2] === first && text[i - 1] === second) {
            answer.push(text[i]);
        }
    }
    return answer;
};

module.exports = findOcurrences;