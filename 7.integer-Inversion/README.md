### 7.Integer inversion

----

### 题目

给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

----

#### 示例

##### 示例1

```javascript
输入: 123
输出: 321
```



##### 示例2

```javascript
输入: -123
输出: -321
```



##### 示例3

```JavaScript
输入: 120
输出: 21
```



----

#### 解题思路

利用取余将最后的数取出来再每次去除都乘以十赋值到新的变量内，取余之后再除十在整型变量下这样就可以将取余过的数去除，重复直到传入的参数被取为零为止，其中要判断是否超过变量最大值的上限和下限