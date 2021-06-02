### 03.findRepeatNumber
----
#### 题目

找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

----
#### 示例

```
输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3 
```

**限制：**

2 <= n <= 100000

----
#### 解题思路
从题目分析，这是贪心算法类型，找到最近最优解，其他不用考虑
1、用哈希表存储，遍历数组，如果get的位置有值返回
```javascript
  let map = new Map()
  for(let num of nums) {
      if (map.get(num)) {
          return num
      }else {
          map.set(num, 1)
      }
  }
```

2、使用原地置换方法
```javascript
if (nums.length === 0) return -1;
for (let i = 0; i < nums.length; i++) {
  while (nums[i] !== i) {
    if (nums[i] === nums[nums[i]]) return nums[i];
    let temp = nums[i]
    nums[i] = nums[temp]
    nums[temp] = tempv
  }
}
return -1
```