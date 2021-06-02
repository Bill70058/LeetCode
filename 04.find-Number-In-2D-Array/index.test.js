const findNumberIn2DArray = require('./index.js')

describe('find Number In 2D Array', () => {
  test('try test', () => {
    expect(findNumberIn2DArray([
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ], 5)).toBe(true);
    expect(findNumberIn2DArray([
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ], 20)).toBe(false)
  });
})