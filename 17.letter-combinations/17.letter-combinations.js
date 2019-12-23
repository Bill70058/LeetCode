/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let maps = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }
    let res = [];
    for (let num of digits) {
        let first = maps[num];
        if (res.length > 0) {
            let tmp = [];
            for (let i = 0; i < res.length; i++) {
                let second = first.length;
                for (let j = 1; j < second; j++) {
                    tmp.push(res[i] + first[j])
                }
                res[i] += first[0];
            }
            res.push(...tmp)
        } else {
            res.push(...first);
        }
    }
    return res;
};

module.exports = letterCombinations;