### 38.countAndSay
----
#### 题目
报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。

**注意**：整数顺序将表示为一个字符串。

----
#### 示例
 
##### 示例 1:

```
输入: 1
输出: "1"
```

##### 示例 2:

```
输入: 4
输出: "1211"
```

----
#### 解题思路
找规律可以得到，1,2,3分别有三种可能，三种可能，两种可能
1 -> 1,11,111
2 -> 2,22,222
3 -> 3,33
可以看出，每到这几种情况就会进行二次解读，进位补一或者重解读
所以，外层循环对输入的目的数进行循环遍历，内层循环进行对当前字符串的循环遍历
内层循环对字符串进行判断，是否有连续的数字，有的话进行计数，然后进位解读，无的话进行二次解读，然后再加上上一次解读的字符串