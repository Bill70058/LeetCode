import fourSum from './18.four-sum'


describe('four sum', () => {
    test('input [1, 0, -1, 0, -2, 2],0', () => {
        expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqual([
            [-2, -1, 1, 2],
            [-2, 0, 0, 2],
            [-1, 0, 0, 1]
        ])
    })
})