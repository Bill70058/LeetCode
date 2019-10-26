### 387.firstUniqChar
----
#### 题目
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

----
#### 示例

##### 示例1
```
s = "leetcode"
返回 0.
```

##### 示例2
```
s = "loveleetcode",
返回 2.
```

**注意事项**：您可以假定该字符串只包含小写字母。

----
#### 解题思路
如果第一次找到该字符的位置下标与最后一次找到该字符位置的下标相同则返回当前下标，否则下一轮循环，最后都没找到则返回-1