/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let up = 0,
        side = 0,
        front = 0,
        max;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] !== 0) {
                up++;
            }
        }
    }

    for (let i = 0; i < grid.length; i++) {
        max = 0;
        for (let j = 0; j < grid[i].length; j++) {
            max = Math.max(grid[i][j], max);
        }
        side += max;
    }

    for (let j = 0; j < grid[0].length; j++) {
        max = 0;
        for (let i = 0; i < grid.length; i++) {
            max = Math.max(max, grid[i][j]);
        }
        front += max;
    }
    return up + side + front;
};

module.exports = projectionArea;