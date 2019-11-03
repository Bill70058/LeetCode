/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
    let answer = [];
    let start = 1,
        end = 1000;
    while (start <= 1000 && end >= 1) {
        let r = customfunction.f(start, end);
        if (r === z) {
            let count = [];
            count.push(start);
            count.push(end);
            answer.push(count);
            start++;
            end--;
        } else if (r > z) {
            end--;
        } else {
            start++;
        }
    }
    return answer;
};


