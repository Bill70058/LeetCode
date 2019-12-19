import threeSum from './15.three-sum'

describe('three sum', () => {
    test('input [-1,0,1,2,-1,-4] return [[-1,-1,2],[-1,0,1]]', () => {
        expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
            [-1, -1, 2],
            [-1, 0, 1]
        ])
    })
})