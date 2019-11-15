/**
 * @param {number[][]} grid
 * @return {number}
 */
const surfaceArea = function (grid) {
    let N = grid.length;
    //先计算所有立方体的表面积和
    let count = 0;
    //再计算重叠部分的面积
    //因上下重叠损失的面积
    let lostArea1 = 0;
    //因左右重叠损失的面积
    let lostArea2 = 0;
    //因前后重叠损失的面积
    let lostArea3 = 0;
    let min = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            count += grid[i][j];
            //上下重叠
            if (grid[i][j] > 0)
                lostArea1 += (grid[i][j] - 1) * 2; //上下重叠，每摞损失(v-1)*2的面积
            //前后重叠
            if (j !== 0) {
                let back = grid[i][j - 1];
                let frond = grid[i][j];
                if (back <= frond)
                    min = back;
                else
                    min = frond;
                lostArea2 += min * 2; //前后重叠，损失面积等于数量少的那摞的数量min*2累加
            }
        }
    }
    let allArea = count * 6;
    //左右重叠
    for (let j = 0; j < N; j++) {
        for (let i = 0; i < N; i++) {
            if (i !== 0) {
                let left = grid[i - 1][j];
                let right = grid[i][j];
                if (left <= right)
                    min = left;
                else
                    min = right;
                lostArea3 += min * 2; //左右重叠，损失面积等于数量少的那摞的数量min*2累加
            }
        }
    }
    return allArea - lostArea1 - lostArea2 - lostArea3;
}

module.exports = surfaceArea;