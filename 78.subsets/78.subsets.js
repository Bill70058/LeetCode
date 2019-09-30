/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var result = [[]];  //  初始为一个二维数组
    for (var num of nums) {   //  依次把每个数都加到每一个元素中，且保留之前的所有元素
        //num  -> 1,2,3
      var temp = []
      for (var before of result) {
          //将空数组与当前数组的单个的数字拼接成一个数组推入临时数组
          //[[1]];
          //[[2],[1,2]];
          //[3],[1,2,3],[2,3],[1,3]
          // 总: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
        temp.push(before.concat(num))
      }
      //将所有的临时数组拼接到总数组
      //[[]] = [[],[1]] -> [[],[1],[2],[1,2]] -> ...
      result = result.concat(temp);
    }
    return result;
  };

console.log(  subsets([1,2,3]))
module.exports = subsets;