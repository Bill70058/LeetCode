### 459.repeatedSubstringPattern
----
#### 题目
给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000

----
#### 示例


##### 示例 1:

```
输入: "abab"

输出: True

解释: 可由子字符串 "ab" 重复两次构成。
```

##### 示例 2:

```
输入: "aba"

输出: False
```

##### 示例 3:

```
输入: "abcabcabcabc"

输出: True

解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)
```

----
#### 解题思路
如果一个字符串由一个子串重复多次构成的话，那么这个字符串乘2（sCopy = s+s -- 为了更好区分第一个叫s1，第二个叫s2)，那么这个字符串（sCopy）掐头去尾取中间的话s1的尾加s2的头就能够组成s


```
abab 
abababab
bababa -> abab 

abcabcabc
abcabcabcabcabcabc
bcabcabcabcabcab -> abcabcabc

abcba
abcbaabcba
bcbaabcb -> abcba

ababc
ababcababc
babcabab -> ababc
```