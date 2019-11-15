import fairCandySwap from './888.fair-candy-swap'

describe('fair candy swap', () => {
    test('input [1,1],[2,2] return [1,2]', () => {
        expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);
    });
    test('input [1,2],[2,3] return [1,2]', () => {
        expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);
    });
    test('input [2],[1,3] return [2,3]', () => {
        expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);
    });
    test('input [1,2,5],[2,4] return [5,4]', () => {
        expect(fairCandySwap([1, 2, 5], [2, 4])).toEqual([5, 4]);
    });
})