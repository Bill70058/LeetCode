### 10-I.fib
----
#### 题目
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
```
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1

----
#### 示例
**示例1**
```
输入：n = 2
输出：1
```
**示例2**
```
输入：n = 5
输出：5
```

----
#### 解题思路
**注意**
``题目所说的结果需要取余是每次计算的结果都要``
1、遍历
2、递归
3、递归记忆优化
递归中有重复的计算，定义
4、使用动态规划
```typescript
function fib(n: number): number {
  let a: number = 0, b: number = 1
  let sum: number
  for(let i = 0; i < n; i++) {
      sum = (a+b) % 1000000007
      a = b
      b = sum
  }
  return a
};
```