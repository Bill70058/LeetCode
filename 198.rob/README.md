### 198.rob
----
#### 题目
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额

----
#### 示例
##### 示例1
```
输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
```

##### 示例2
```
输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
```

----
#### 解题思路
f(k) 是抢劫总值，Ai是单个房间值
f(0) = a(0); f(1) = a(1);

到了第三个房间有两个选择，可以选择抢1,3房间，或者不抢3号房，只抢2号；
f(2) = f(0)+a(2); or f(2) = f(2-1); 
公式：f(n) = f(n-2) + a(n); or f(n) = f(n-1) --> f(n) = Math.max(f(n-2)+a(n),f(n-1));
有些类似于斐波那契数列