/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    let map = new Map();
    let res = '';
    words = words.sort();
    for (let word of words) {
        //如果单词只有一个字母，那一定是共有的
        if (word.length === 1 || map.has(word.substring(0, word.length - 1))) {
            res = word.length > res.length ? word : res;
            map.set(word);
        }
    }
    return res;
};

module.exports = longestWord;