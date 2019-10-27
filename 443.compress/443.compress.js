/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    if (chars.length === 1) {
        return chars;
    }
    let count = 1;
    let answer = [];
    for (let i = 0; i < chars.length - 1; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        }
        if (chars[i] !== chars[i + 1] || i + 1 === chars.length - 1) {
            answer.push(chars[i]);
            if (count === 1) {
                continue;
            }
            count = count.toString();
            for (let j = 0; j < count.length; j++) {
                answer.push(count[j]);
            }
            count = 1;
        }
    }
    return answer;
};
module.exports = compress;