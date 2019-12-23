### 16.threeSumClosest
----
#### 题目
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 ``nums = [-1，2，1，-4]``, 和 ``target = 1.``

与 target 最接近的三个数的和为`` 2. (-1 + 2 + 1 = 2).``

----
#### 解题思路
利用二分查找法的想法，双指针遍历查找降低时间复杂度，类似的题(15)