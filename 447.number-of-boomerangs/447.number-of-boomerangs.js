/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    let answer = 0;
    for (let i = 0; i < points.length; i++) {
        // points[i] 设置为枢纽点
        // 记录其他点到points[i]之间的距离的频次
        let map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (j != i) {
                // 以两点距离为key
                let d = dis(points[i], points[j]);
                if (map.has(d)) {
                    map.set(d, map.get(d) + 1);
                } else {
                    map.set(d, 1);
                }
            }
        }
        // 计算频次的组合
        map.forEach((val, key) => {
            answer += val * (val - 1); // 计算排列组合个数 n * (n - 1)
        });
    }
    return answer;
};

function dis(pa, pb) {
    // 求坐标点间的距离 https://baike.baidu.com/item/%E4%B8%A4%E7%82%B9%E9%97%B4%E8%B7%9D%E7%A6%BB%E5%85%AC%E5%BC%8F
    return (pa[0] - pb[0]) * (pa[0] - pb[0]) + (pa[1] - pb[1]) * (pa[1] - pb[1]);
}
module.exports = numberOfBoomerangs;