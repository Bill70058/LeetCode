/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //记录给出一个最大值
    var max = 0;
    //第一层循环：循环整个数组，-1 减去自身
    for(let i = 0; i < prices.length-1; i++){
        //从自身下一个数开始往后算
        for(let j = i+1; j < prices.length; j++){
            //记录下后一个数减去前一个数的值，代表利润
            let profit = prices[j] - prices[i];
            //如果这个利润比上一个记录的利润值大则替代
            if(profit > max){
                max = profit;
            }
        }
    }
    return max;
};

module.exports = maxProfit;
