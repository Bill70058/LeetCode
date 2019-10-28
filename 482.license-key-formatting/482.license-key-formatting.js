/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    //排除全都是‘-’号的句子
    let count = 0;
    for (let c of S) {
        if (c === '-') {
            count++;
        }
    }
    if (count === S.length) {
        return '';
    }

    let arr = S.split('-');
    let str = '',
        len = 0;
    let first = 0;
    let answer = '';
    for (let n of arr) {
        str += n;
    }
    len = str.length;

    //字母大写
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() <= 122 && str[i].charCodeAt() >= 97) {
            str[i] = str[i].toUpperCase();
        }
    }

    //找出第一组最少为多少并记录下标
    for (let i = 1; i <= K; i++) {
        if ((len - i) % K === 0) {
            first = i;
        }
    }
    //将第一组的字符插入答案变量
    for (let i = 0; i < first; i++) {
        answer += str[i];
    }
    //将剩下的字符按照规则 K 个字符为一组插入
    for (let i = first, j = 0; i < str.length; i++, j++) {
        if (j % K === 0) {
            answer += '-';
        }
        answer += str[i];
    }
    return answer;
};

module.exports = licenseKeyFormatting;