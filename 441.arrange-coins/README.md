### 441.arrangeCoins
----
#### 题目
你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。

给定一个数字 n，找出可形成完整阶梯行的总行数。

n 是一个非负整数，并且在32位有符号整型的范围内。

----
#### 示例

##### 示例 1:

```
n = 5

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤

因为第三行不完整，所以返回2.
```

##### 示例 2:

```
n = 8

硬币可排列成以下几行:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

因为第四行不完整，所以返回3.
```

----
#### 解题思路
每层用总数(n)减去该层层数(i)如果减去后不为正数则返回(i-1)即上一层的数目，开头可以判断总数(n)是否为0和是否小于等于2，如果是则返回对应结果加快运行速度。