/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let sum = 0;
    for (let i = 0; i < points.length - 1; i++) {
        let temp1 = Math.abs(points[i][0] - points[i + 1][0]);
        let temp2 = Math.abs(points[i][1] - points[i + 1][1]);
        sum += Math.max(temp1, temp2);
    }
    return sum;
};

module.exports = minTimeToVisitAllPoints;