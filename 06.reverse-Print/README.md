### 06.reversePrint
----
#### 题目
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

----

#### 示例
```
输入：head = [1,3,2]
输出：[2,3,1]
```
**限制：**

``0 <= 链表长度 <= 10000``

----
#### 解题思路
1、倒序替换
```javascript
var reversePrint = function (head) {
  let nums = [],
    node = head
  while (node) {
    nums.unshift(node.val)
    node = node.next
  }
  return nums
};
```
2、递归
```javascript
var reversePrint = function(head) {
   let nums = []
   let reverse = function(node) {
       if (node) {
           reverse(node.next)
           nums.push(node.val)
       }
   }
   reverse(head)
   return nums
};
```
3、反转链表(升级)
如果需求是不以数组输出，需要在原链表上修改
```javascript
var reverseList = function(head) {
    if(!head || !head.next) return head
    var prev = null, curr = head
    while(curr) {
        // 用于临时存储 curr 后继节点
        var next = curr.next
        // 反转 curr 的后继指针
        curr.next = prev
        // 变更prev、curr 
        // 待反转节点指向下一个节点 
        prev = curr
        curr = next
    }
    head = prev
    return head
};
```