/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
    let indegrees = new Array(numCourses);
    for (let i = 0; i < indegrees.length; i++) {
        indegrees[i] = 0;
    }

    //统计被指次数
    for (let i = 0; i < prerequisites.length; i++) {
        indegrees[prerequisites[i][0]]++;
    }

    //统计安全数
    let queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) queue.push(i);
    }

    //每次移除并返回首位安全数和其他的指向数对比，如果是安全数指向，被指数的次数-1；如果不是则跳过，如果被指数次数为0了，则加入安全数。
    while (queue.length !== 0) {
        let pre = queue.shift();
        numCourses--;
        for (let i = 0; i < prerequisites.length; i++) {
            if (prerequisites[i][1] !== pre) {
                continue
            }
            if (--indegrees[prerequisites[i][0]] === 0) {
                queue.push(prerequisites[i][0])
            };
        }
    }
    return numCourses === 0;
};

module.exports = canFinish;