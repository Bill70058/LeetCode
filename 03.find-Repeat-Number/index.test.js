const findRepeatNumber = require('./index.js')

describe('find Repeat Number', () => {
  test('input [2, 3, 1, 0, 2, 5, 3] return 2 or 3', () => {
    expect(findRepeatNumber([2, 3, 1, 0, 2, 5, 3])).toEqual(2);
  });
  test('input [1, 3, 1, 0, 2] return 1', () => {
    expect(findRepeatNumber([1, 3, 1, 0, 2])).toEqual(1);
  });
})