/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let map1 = 'qwertyuiop',
        map2 = 'asdfghjkl',
        map3 = 'zxcvbnm';
    let answer = [];
    for (let word of words) {
        let wordLower = word.toLowerCase();
        if (isFindWords(wordLower, map1) || isFindWords(wordLower, map2) || isFindWords(wordLower, map3)) {
            answer.push(word);
        }
    }
    return answer;

};

function isFindWords(word, map) {
    for (let character of word) {
        if (!map.includes(character)) {
            return false;
        }
    }
    return true;
}

module.exports = findWords;