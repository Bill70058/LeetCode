### 941.validMountainArray
----
#### 题目
给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

A.length >= 3
在 0 < i < A.length - 1 条件下，存在 i 使得：
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[B.length - 1]
 
----
#### 示例

##### 示例 1：

```
输入：[2,1]
输出：false
```

##### 示例 2：

```
输入：[3,5,5]
输出：false
```

##### 示例 3：

```
输入：[0,3,2,1]
输出：true
``` 

**提示**：

- 0 <= A.length <= 10000
- 0 <= A[i] <= 10000 

----
#### 解题思路
- 一、找出数组最大值，判断从最大值的下标开始，遍历往从该下标起的左边与右边元素是否都是逐渐变小
- 二、优化第一种，从左边开始遍历，i = 0，判断是否找到``A[i] > A[i+1]``的值，如果找到了，判断i是否等于数组长度减一，如果不是再继续遍历判断``A[i] > A[i+1]``，最后判断 i 是否遍历到了数组最后，也就是i 是否等于 ``A.length-1``