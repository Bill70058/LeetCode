import eraseOverlapIntervals from './eraseOverlapIntervals.js'

describe('erase overlap intervals', () => {
  test('input [ [1,2], [2,3], [3,4], [1,3] ] return 1', () => {
    expect(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ])).toEqual(1)
  })
  test('input [ [1,2], [1,2], [1,2] ] return 2', () => {
    expect(eraseOverlapIntervals([ [1,2], [1,2], [1,2] ])).toEqual(2)
  })
})