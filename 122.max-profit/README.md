### 122.maxProfit
----
#### 题目
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

----
#### 示例
##### 示例1
```
输入: [7,1,5,3,6,4]
输出: 7
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
```

##### 示例2
```
输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
```

##### 示例3
```
输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

----
#### 解题思路
如果第``i+1``个大于第``i``个的话，则算开始买入，并结算利润``profit += prices[i+1]-prices[i]``，
此时虽然我们结算了利润，但是不算卖出，此时``i++``如果再一次``i+1``大于``i``的话则再继续计算，否则才算卖出
例如：i = 0; price[i] = 7; price[i+1] = 1;此时没有交易
i = 1; price[i] = 1; price[i+1] = 5; 此时交易，并结算profit += prices[i+1] - price[i];
i = 2; 此时price[i+1] < price[i]，那么我们就算结束了交易，但如果i = 2; price[i+1] > price[i],那么我们继续算利润 profit += prices[i+1] - prices[i]。此时交易尚未结束。