/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (!prices.length) {
    return 0;
  }

  const n = prices.length;
  // 因为同一天进行买卖无意义，收益为0，还损失交易费用，所以最多也是隔天买卖，从而除2并向下取余
  k = Math.min(k, Math.floor(n / 2));
  const buy = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));
  const sell = new Array(n).fill(0).map(() => new Array(k + 1).fill(0));

  buy[0][0] = -prices[0];
  sell[0][0] = 0;
  // 设置边界(一个不可能的值 - 超小值)，表示不可能进行任何交易
  for (let i = 1; i <= k; ++i) {
    buy[0][i] = sell[0][i] = -Number.MAX_VALUE;
  }

  // 买入与卖出状态转移
  for (let i = 1; i < n; ++i) {
    buy[i][0] = Math.max(buy[i - 1][0], sell[i - 1][0] - prices[i]);
    for (let j = 1; j <= k; ++j) {
      buy[i][j] = Math.max(buy[i - 1][j], sell[i - 1][j] - prices[i]);
      sell[i][j] = Math.max(sell[i - 1][j], buy[i - 1][j - 1] + prices[i]);
    }
  }

  return Math.max(...sell[n - 1]);
};

export default maxProfit