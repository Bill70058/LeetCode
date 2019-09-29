### 338.countBits
----
#### 题目
给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

----
#### 示例

##### 示例1
```
输入: 2
输出: [0,1,1]
```

##### 示例2
```
输入: 5
输出: [0,1,1,2,1,2]
```

----
#### 解题思路
类似计算汉明距离的思路，注意观察``x &= x-1``每次计算的结果，这个计算利用了汉明权重，重复去掉最不重要的一个数