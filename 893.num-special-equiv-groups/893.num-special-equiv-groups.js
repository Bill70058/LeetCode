/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    //设置一个计数数组，用于计算有多少种排列方式
    let count = [];
    for (let i = 0; i < A.length; i++) {
        let a = '',
            b = '';
        //将每个字符串的奇偶位字符都分别记录
        for (let j = 0; j < A[i].length; j++) {
            if (j % 2 === 0) {
                a += A[i][j];
            } else {
                b += A[i][j];
            }
        }
        //分别将奇偶位字符串排序
        a = a.split('').sort().join('');
        b = b.split('').sort().join('');

        //如果计数数组内找不到奇字符串与偶字符串的拼接字符串则推入计数数组内
        if (!count.includes(a + b)) {
            count.push(a + b);
        }
    }
    return count.length;
};

module.exports = numSpecialEquivGroups;