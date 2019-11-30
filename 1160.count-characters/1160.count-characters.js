/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let map = new Map();
    //记录chars的字母与其数量
    for (let character of chars) {
        if (map.has(character)) {
            map.set(character, map.get(character) + 1);
        } else {
            map.set(character, 1);
        }
    }

    //单词是否满足都有用
    let check = function (words, map) {
        let newMap = new Map(map); //复制原来的map，避免修改
        let back = true;
        for (let word of words) {
            //找到一个字母，哈希表字母减一
            if (newMap.has(word) && newMap.get(word) > 0) {
                newMap.set(word, newMap.get(word) - 1);
            } else {
                back = false;
            }
        }
        return back;
    }

    let answer = 0;
    for (let word of words) {
        let temp = word.split('');
        if (check(temp, map)) {
            answer += temp.length;
        }
    }
    return answer;
};

module.exports = countCharacters;