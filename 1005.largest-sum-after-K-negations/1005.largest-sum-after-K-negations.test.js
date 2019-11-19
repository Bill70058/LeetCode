import largestSumAfterKNegations from './1005.largest-sum-after-K-negations'

describe('largest sum after K negations', () => {
    test('input [4,2,3],1 return 5', () => {
        expect(largestSumAfterKNegations([4, 2, 3], 1)).toEqual(5);
    });
    test('input [3,-1,0,2],3 return 6', () => {
        expect(largestSumAfterKNegations([3, -1, 0, 2], 3)).toEqual(6);
    });
    test('input [2,-3,-1,5,-4],2 return 13', () => {
        expect(largestSumAfterKNegations([2, -3, -1, 5, -4], 2)).toEqual(13);
    });
})