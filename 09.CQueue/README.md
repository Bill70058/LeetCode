### 09.CQueue
----
#### 题目
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

----

#### 示例
1. 示例1
```
输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
```

2. 示例2
```
输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
```

**提示：**

- ``1 <= values <= 10000``
- ``最多会对 appendTail、deleteHead 进行 10000 次调用``

----
#### 解题思路
**题目解析**
读题可以得到，第一个输入栈是指令，第二个栈是执行指令传入的参数
从示例2可以得到，删除时队列内部无数据时返回-1，有数据时则是根据栈的特性，先进后出来进行删除