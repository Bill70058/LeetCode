### 557.reverseWords
----
#### 题目
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

----
#### 示例
```
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"
```
**注意**：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

----
#### 解题思路
先将字符串分割为数组，再将数组内的元素 -- 分割后的单词，分割为数组，再将小数组反转 -> 拼接为字符串， 再拼接为一整句的字符串
