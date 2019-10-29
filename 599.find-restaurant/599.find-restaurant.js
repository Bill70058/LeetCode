/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findanswertaurant = function (list1, list2) {
    let map = new Map();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    let answer = [];
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < list2.length; i++) {
        if (map.has(list2[i])) {
            let j = map.get(list2[i]);
            if (i + j < min) {
                answer = [];
                answer.push(list2[i]);
                min = i + j;
            } else if (i + j === min) {
                answer.push(list2[i]);
            }
        }
    }
    return answer
};

module.exports = findanswertaurant;