### 1137.tribonacci
----
#### 题目
泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

---- 
#### 示例

##### 示例 1：

```
输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
```

##### 示例 2：

```
输入：n = 25
输出：1389537
``` 

**提示**：

- 0 <= n <= 37
- 答案保证是一个 32 位整数，即 answer <= 2^31 - 1

----
#### 解题思路
- 一、暴力破解法：由题目可知，该题是类似于斐波那契数列的，所以利用公式我们可以推出所有的范围内可得数
- 二、连表法：每运算一次n3往后推一位

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 1;
    let n1 = 0,n2 = 1,n3 = 1;
    let sum = 0;
    for(let i = 3; i <= n; i++){
        sum = n1 + n2 + n3;
        [n1,n2] = [n2,n3];
        n3 = sum;
    }
    return sum;
};
```