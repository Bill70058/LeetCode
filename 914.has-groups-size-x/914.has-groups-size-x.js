/**
 * @param {number[]} deck
 * @return {boolean}
 */


var hasGroupsSizeX = function (deck) {
    let hash = deck.reduce((pre, num) => { //统计出每种数字的数目
        if (!pre[num]) {
            pre[num] = 1
        } else {
            pre[num]++
        }
        return pre
    }, {});
    let numCount = Object.values(hash); //将hash中的每项数值存入数组，便于后续遍历
    let min = numCount.sort((a, b) => a - b)[0]; //利用数组排序快速获取最小值
    if (min < 2) {
        return false
    }; //根据题意，如果最分组最小数量小于2，直接返回false
    return !numCount.some((item, index) => {
        if (index > 0) return commonDivisor(item, min) === 1
    })
}

//求公约数的方法  
function commonDivisor(a, b) { //定义一个寻找公约数的方法
    if (b === 0) {
        return a;
    }
    return commonDivisor(b, a % b);
}

module.exports = hasGroupsSizeX;