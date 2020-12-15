import monotoneIncreasingDigits from './monotoneIncreasingDigits'

describe('monotone increasingDigits', () => {
  test('input 1234 return 1234', () => {
    expect(monotoneIncreasingDigits(1234)).toEqual(1234)
  })
  test('input 2879 return 2799', () => {
    expect(monotoneIncreasingDigits(2879)).toEqual(2799)
  })
})