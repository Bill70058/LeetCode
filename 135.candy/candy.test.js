import candy from './candy'

describe('candy', () => {
  test('input [1,3,2,8,4,9] return 9', () => {
    expect(candy([1, 3, 2, 8, 4, 9])).toEqual(9)
  })
  test('input [29,51,87,87,72,12] return 12', () => {
    expect(candy([29, 51, 87, 87, 72, 12])).toEqual(12)
  })
})