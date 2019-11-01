/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let answer = [];

    let countCharCodeAt = 0;
    //创建26个字母的次数统计数组
    let res = assignment(26);

    //统计26个字母分别出现多少次
    for (let character of A[0].split('')) {
        countCharCodeAt = character.charCodeAt() - 97;
        res[countCharCodeAt]++;
    }
    for (let i = 1; i < A.length; i++) {
        let temp = assignment(26);

        //统计每个字符串内26个字符出现的次数
        for (let character of A[i].split('')) {
            countCharCodeAt = character.charCodeAt() - 97;
            temp[countCharCodeAt]++;
        }

        //用第一个字符串的字符出现的次数与其他字符串出现的字符次数对比求出字符出现的最小次数并将其他字符没有交集的清零
        for (let j = 0; j < 26; j++) {
            res[j] = Math.min(res[j], temp[j]);
        }
    }

    //将有交集的字符按照出现的次数推入答案数组
    for (let i = 0; i < res.length; i++) {
        if (res[i] > 0) {
            for (let j = 0; j < res[i]; j++) {
                answer.push(String.fromCharCode(i + 97));
            }
        }
    }
    return answer;
};

module.exports = commonChars;

//数组赋0操作
function assignment(num) {
    let arr = new Array(num);
    for (let i = 0; i < num; i++) {
        arr[i] = 0;
    }
    return arr;
}