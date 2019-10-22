### 290.wordPattern
----
#### 题目
给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

----
#### 示例

##### 示例1:

```
输入: pattern = "abba", str = "dog cat cat dog"
输出: true
```

##### 示例 2:

```
输入:pattern = "abba", str = "dog cat cat fish"
输出: false
```

##### 示例 3:

```
输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
```

##### 示例 4:

```
输入: pattern = "abba", str = "dog dog dog dog"
输出: false
```

**说明**:
- 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    

----
#### 解题思路
设置两个字典，一个key为规则字符串的字符，一个key为解析过成为数组的目标字符串转化的数组，通过字典对比查看规则与对应的字符是否相等，设置双向映射是为了防止全部字符重复规则不同。

```
pattern = 'abba',str = 'dog cat cat dog'
patternMap = {'a':'dog','b':'cat'}
strArrMap = {'dog':'a','cat':'b'}

解释：
循环对比：
- 当前规则存在对应值时，获取对应值，对比当前值是否等于规则对应值
- 当前值存在对应规则时，获取当前规则，对比当前规则是否等于对应规则

i = 0
patternMap：a 规则不存在 存入字典 对应值为 'dog'
strArrMap：'dog'字符不存在 存入字典 对应规则为'a'

i = 1
patternMap：b 规则不存在 存入字典 对应值为 'cat'
strArrMap：'cat'字符不存在 存入字典 对应规则为'b'

i = 2
a 规则存在 对应字符是否与patternMap字典中key为'a'的字符相等
'dog' 字符存在 对应规则是否与strArrMap字典中key为'dog'规则相等

.
.
.
```

``******************************分界线*******************************``

```
pattern = 'abba',str = 'dog dog dog dog'
patternMap = {'a':'dog','b':'dog'}
strArrMap = {'dog':'a'}

i = 1
dog字符 在strArrMap字典中存在，对应规则为'a'，当前规则为(pattern[1] = b) 返回false

```