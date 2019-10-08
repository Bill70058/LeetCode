/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {

// 创造一个罗马数字的字典
    const map = {
        I : 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    // 用于返回的总数
    let answer = 0;
    // console.log(s.length);
    for(let i = 0;i < s.length;) {
        //如果字符串能够取两位，并且这两位能够在字典中找到则取出，累加，i 后移两位
        // console.log(map[s.substring(i,i+2)]);
        if(i + 1 < s.length && map[s.substring(i, i+2)]) {
            // console.log(s.substring(i,i+2));
            answer += map[s.substring(i, i+2)];
            i += 2;
        } else {
            // 否则，字典取出这一位，并且i 后移一位
            // console.log(s.substring(i,i+1));
            answer += map[s.substring(i, i+1)];
            i ++;
        }
    }
    return answer;
};

console.log(romanToInt('MCMXC'))

module.exports = romanToInt;