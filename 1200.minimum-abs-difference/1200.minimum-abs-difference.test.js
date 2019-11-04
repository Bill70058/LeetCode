import minimumAbsDifference from './1200.minimum-abs-difference'

describe('minimum abs difference', () => {
    test('input [4,2,1,3] return [[1,2],[2,3],[3,4]]', () => {
        expect(minimumAbsDifference([4, 2, 1, 3])).toEqual([
            [1, 2],
            [2, 3],
            [3, 4]
        ]);
    });
    test('input [[1,3,6,10,15] return [[1,3]]', () => {
        expect(minimumAbsDifference([1, 3, 6, 10, 15])).toEqual([
            [1, 3]
        ]);
    });
    test('input [3,8,-10,23,19,-4,-14,27] return [[-14,-10],[19,23],[23,27]]', () => {
        expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])).toEqual([
            [-14, -10],
            [19, 23],
            [23, 27]
        ]);
    });
})