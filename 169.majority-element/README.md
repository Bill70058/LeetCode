### 169.majorityElement
----
#### 题目
给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

----
#### 示例
##### 示例1
```
输入: [3,2,3]
输出: 3
```
##### 示例2
```
输入: [2,2,1,1,1,2,2]
输出: 2
```
----
#### 解题思路
类似冒泡排序，将每个数都循环统计一次，如果统计的次数超过数组半数就返回该数