/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
    let count = 0;
    for (let i = 0; i < A[0].length; i++) {
        let a = '';
        for (let j = 0; j < A.length; j++) {
            a += A[j].charAt(i);
        }
        if (isDecrement(a)) {
            count++;
        }
    }
    return count;
};

//如果是递减返回true
function isDecrement(a) {
    if (a.length > 2) {
        for (let i = 1; i < a.length; i++) {
            //字符串减法隐式转换为unicode编码计算
            if (a.charCodeAt(i) - a.charCodeAt(i-1) < 0) {
                return true;
            }
        }
    }
    return false;
}

minDeletionSize(["cba", "daf", "ghi"]);
module.exports = minDeletionSize;