### 1025.divisorGame
----
#### 题目
爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。

----
#### 示例 

##### 示例 1：

```
输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
```

##### 示例 2：

```
输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
```
 
**提示**：

- 1 <= N <= 1000

----
#### 解题思路
- 通过判断题目条件判断当爱丽丝时是否能找到满足``N%x==0``的值，虽然内存消耗大，但是运行时间快
```javascripe
var divisorGame = function(N) {
    let count = 1;
    while(N > 0){
        if(findNumber(N) === -1 && count % 2 === 0){
            return true;
        }
        if(findNumber(N) === -1 && count % 2 !== 0){
            return false;
        }
        N -= findNumber(N);
        count++;
    }
    
    return count % 2 === 0;
};

function findNumber(number){
    for(let i = 1; i < number; i++){
        if(number % i === 0){
            return i;
        }
    }
    return -1;
}
```
- 通过找题解规律可得到，如果是奇数爱丽丝输