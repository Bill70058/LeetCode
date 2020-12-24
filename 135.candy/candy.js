/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let len = ratings.length
  let left = new Array(len).fill(1)
  for (let i = 0; i < len; i++) {
    if (i !== 0 && ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    }
  }
  let rightStep = 1,
    count = 0
  for (let i = len - 1; i > -1; i--) {
    if (i !== len - 1 && ratings[i] > ratings[i + 1]) {
      rightStep++
    } else {
      rightStep = 1
    }
    count += Math.max(left[i], rightStep)
  }
  return count
};

export default candy