### 709.toLowerCase
----
#### 题目
实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

----

#### 示例

##### 示例 1：

```
输入: "Hello"
输出: "hello"
```

##### 示例 2：

```
输入: "here"
输出: "here"
```

##### 示例 3：

```
输入: "LOVELY"
输出: "lovely"
```

----
#### 解题思路
- 一、建立个大写字母表字典，循环判断进行查询，速度快，占用内存大。
- 二、转换为Unicode编码，大写字母的编码范围是65-90，大写字母的编码与小写字母的编码间隔32，转换为编码后加上32再转换为字母拼接

```javascripe
var toLowerCase = function(str) {
    str = str.split('');
    for(let i = 0,len = str.length; i < len; i++){
        if(str[i].charCodeAt() <= 90){
            let a = str[i].charCodeAt()+32;
            str[i] = String.fromCharCode(a);
        }
    }
    str = str.join('');
    return str;
};  
```