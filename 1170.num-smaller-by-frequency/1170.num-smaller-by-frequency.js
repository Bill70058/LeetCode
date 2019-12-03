/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {

    //统计
    let counter = new Array(12);
    for (let i = 0; i < 12; i++) {
        counter[i] = 0;
    };
    for (let i = 0; i < words.length; i++) {
        counter[fs(words[i])]++;
    }

    //计数
    for (let i = 9; i >= 0; i--) {
        counter[i] += counter[i + 1];
    }

    //累加至无穷大计数
    let answer = new Array(queries.length);
    for (let i = 0; i < answer.length; i++) {
        answer[i] = 0;
    };
    for (let i = 0; i < queries.length; i++) {
        answer[i] = counter[fs(queries[i]) + 1];
    }
    return answer;
};


//计算Unicode编码最小值的字母的数量
function fs(str) {
    if (str.length < 2) {
        return str.length;
    }
    let temp = str.charAt(0);
    let max = 1;
    for (let i = 1; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch === temp) {
            max += 1;
        } else if (ch < temp) {
            max = 1;
            temp = ch;
        } else {
            continue;
        }
    }
    return max;
}

module.exports = numSmallerByFrequency;