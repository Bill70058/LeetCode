/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = function (commands, obstacles) {
    let axisX = [0, 1, 0, -1];
    let axisY = [1, 0, -1, 0];
    let axisI = 0;
    let endCoordinateX = 0;
    let endCoordinateY = 0;
    let result = 0;
    let hashObstacle = {};
    for (let i = 0; i < obstacles.length; i++) {
        hashObstacle[obstacles[i][0] + '-' + obstacles[i][1]] = true;
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == -2) {
            axisI = (axisI + 3) % 4;
        } else if (commands[i] == -1) {
            axisI = (axisI + 1) % 4;
        } else {
            // 每次走一步
            for (let j = 1; j <= commands[i]; j++) {
                let nextCoordinateX = endCoordinateX + axisX[axisI];
                let nextCoordinateY = endCoordinateY + axisY[axisI];
                // 判断下一步是否为障碍物
                if (hashObstacle[nextCoordinateX + '-' + nextCoordinateY]) {
                    break;
                }
                endCoordinateX = nextCoordinateX;
                endCoordinateY = nextCoordinateY;
                result = Math.max(result, endCoordinateX * endCoordinateX + endCoordinateY * endCoordinateY);
            }
        }
    }
    return result;

};

module.exports = robotSim;