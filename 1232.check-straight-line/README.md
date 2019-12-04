### 1232.checkStraightLine
----
#### 题目
在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。

请你来判断，这些点是否在该坐标系中属于同一条直线上，是则返回 true，否则请返回 false。

---- 
#### 示例

##### 示例 1：

![示例1](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/10/19/untitled-diagram-2.jpg)

```
输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
输出：true
```

##### 示例 2：

![示例2](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2019/10/19/untitled-diagram-1.jpg)
```
输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
输出：false
``` 

**提示**：

- 2 <= coordinates.length <= 1000
- coordinates[i].length == 2
- -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
- coordinates 中不含重复的点

----
#### 解题思路
核心思路：斜率公式 - 
``(y1-y0)/(x1-x0)=(yi-y0)/(xi-x0)``
防止除0，变换成相乘的形式
``(y1-y0)*(xi-x0)==(x1-x0)*(yi-y0)`` 