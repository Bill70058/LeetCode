/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
    //定义四个正方向的坐标
    let dr = [-1, 0, 1, 0];
    let dc = [0, -1, 0, 1];

    //定义纵向的长度与横向的长度
    let R = grid.length,
        C = grid[0].length;

    // queue : 腐烂橙子的坐标；depth：记录腐烂橘子的深度
    let queue = [];
    let depth = new Map();
    for (let r = 0; r < R; ++r)
        for (let c = 0; c < C; ++c)
            if (grid[r][c] == 2) {
                let code = r * C + c;
                queue.push(code);
                depth.set(code, 0);
            }

    let answer = 0;
    while (queue.length !== 0) {
        let code = queue.shift();
        let r = parseInt(code / C),
            c = code % C;

        //计算四个正方向是否有新鲜橘子，有的话腐烂，并记录新腐烂橘子的下标推入腐烂橘子的数组，记录新腐烂的橘子的深度
        for (let k = 0; k < 4; ++k) {
            let nr = r + dr[k];
            let nc = c + dc[k];
            if (0 <= nr && nr < R && 0 <= nc && nc < C && grid[nr][nc] == 1) {
                grid[nr][nc] = 2;
                let ncode = nr * C + nc;
                queue.push(ncode);
                depth.set(ncode, depth.get(code) + 1);
                answer = depth.get(ncode);
            }
        }
    }

    //最后循环判断下是否还有新鲜橘子，有的话证明有橘子腐烂不了
    for (let row of grid) {
        for (let v of row) {
            if (v == 1) {
                return -1;
            }
        }
    }

    return answer;


};

module.exports = orangesRotting;