const reversePrint = require('./index.js')

describe('reverse print', () => {
  test('try test', () => {
    expect(reversePrint('input [1,3,2] return [2,3,1]')).toEqual([2, 3, 1])
  })
})