### 507.checkPerfectNumber
----
#### 题目
对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。

给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False

----
 
#### 示例：
```
输入: 28
输出: True
解释: 28 = 1 + 2 + 4 + 7 + 14
 ```

**提示**：

输入的数字 n 不会超过 100,000,000. (1e8)

----
#### 解题思路
以36为例，除去1，其余的因子分别有[2, 18]、[3, 12]、[4, 9]，6，因为6*6 = 36，所以6是因子，但是这两个数重复了，所以只取一个与1一样单独计算。
3对因子的小值都是小于6的，所以以平方根6为上界遍历就可以获取到全部因子，最后再单独计算平方根6。