/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []
    // count1统计“(”的个数，count2统计“)”的个数
    function generates(res, ans, count1, count2, n) {
        if (count1 > n || count2 > n) {
            return;
        }
        if (count1 === n && count2 === n) {
            res.push(ans)
        }
        if (count1 >= count2) {
            let ans1 = ans
            generates(res, ans + '(', count1 + 1, count2, n)
            generates(res, ans1 + ')', count1, count2 + 1, n)
        }
    }
    generates(res, '', 0, 0, n)
    return res
};

module.exports = generateParenthesis