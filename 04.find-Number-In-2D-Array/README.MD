### 04.findNumberIn2DArray
----
#### 题目
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

----
#### 示例
现有矩阵 matrix 如下
```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```
给定 ``target = 5``，返回 ``true``。

给定 ``target = 20``，返回 ``false``。

**限制**：

``0 <= n <= 1000``

``0 <= m <= 1000``

----
#### 解题思路
1、暴力
遍历所有一维用includes方法查找
```javascript
var findNumberIn2DArray = function(matrix, target) {
    for(let arr of matrix) {
        if (arr.includes(target)) {
            return true
        }
    }
    return false
};
```

2、线性查找(变形二分查找/排序二叉树深度遍历)
```javascript
var findNumberIn2DArray = function(matrix, target) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    // 取出二维数组与一维数组的长度
    let rows = matrix.length, columns = matrix[0].length
    // 定位在右上角开始遍历
    let row = 0, column = columns - 1
    while(row < rows && column >= 0) {
        let num = matrix[row][column]
        if (num === target) {
            return true
        }else if (num > target) {
            column--
        }else {
            row++
        }
    }
    return false
};
```

**总结：**
经对比，暴力与线性查找提交后用时与内存消耗几乎相同