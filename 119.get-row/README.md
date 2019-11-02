### 119.getRow
----
#### 题目
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

![示例](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

在杨辉三角中，每个数是它左上方和右上方的数的和

----
#### 示例

```
输入: 3
输出: [1,3,3,1]
```

----
#### 解题思路
核心思路是除了边界数，当前数是上一行的左上方与右上方的数之和
- 循环条件为小于等于numRows，从 1 开始是为了方便判断边界数
- 每次循环都清空临时数组(row)，内存循环结束时将临时数组(row)记录的当前行的杨辉三角子数组推入总数组(arr)
- 因为外层循环是从1 开始所以需要减 2 才能找到上一行