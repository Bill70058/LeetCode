/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let nums = new Array(grid.length*grid[0].length);
    for(let i = 0, iMax = grid.length;i < iMax;i++) {
        for(let j = 0, jMax = grid[0].length;j < jMax;j++) {
            k %= nums.length;
            nums[k++] = grid[i][j];
        }
    }
    k = 0;
    let lists = [];
    for(let i = 0, iMax = grid.length;i < iMax;i++) {
        let tempList = [];
        for(let j = 0, jMax = grid[0].length;j < jMax;j++) {
            tempList.push(nums[k++]);
        }
        lists.push(tempList);
    }
    return lists;
};

module.exports = shiftGrid;