### 633.judgeSquareSum
----
#### 题目
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。

----
#### 示例

##### 示例1:

```
输入: 5
输出: True
解释: 1 * 1 + 2 * 2 = 5
```

##### 示例2:

```
输入: 3
输出: False
```

----
#### 解题思路
如果用普通的双重循环会超出时间限制，所以采取第二层循环的条件为总值的根号值。
这个代码可以理解为双重循环，但是第二层的遍历条件是从后往前，并且起始值是总值的根号值，所以说遍历的数目会减少很多，并且当达到条件当前的计算值(sum) 比总值小时外层循环会加一，如果计算值比总值大时内层循环会加一，这样可以只计算出“有效”结果时才进行遍历变量更改，而不用迭代太多无用结果。