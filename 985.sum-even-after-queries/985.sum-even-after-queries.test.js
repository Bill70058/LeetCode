import sumEvenAfterQueries from './985.sum-even-after-queries'

describe('sum even after queries', () => {
    test('input [1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]] return [8,6,2,4]', () => {
        expect(sumEvenAfterQueries([1, 2, 3, 4], [
            [1, 0],
            [-3, 1],
            [-4, 0],
            [2, 3]
        ])).toEqual([8, 6, 2, 4]);
    });
})