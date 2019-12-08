/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function (cont) {
    let answer = [1, 0];
    for (let i = cont.length - 1; i >= 0; i--) {
        let temp = cont[i] * answer[0] + answer[1];
        // 2*1+0 => 2 <=> [2,1]
        // 0*2+1 => 1 <=> [1,2]
        // 2*1+2 => 4 <=> [4,1]
        // 3*4+1 => 13 <=> [13,4]
        [answer[1], answer[0]] = [answer[0], temp];
    }
    return answer;
};

module.exports = fraction;