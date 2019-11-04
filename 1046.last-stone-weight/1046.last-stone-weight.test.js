import lastStoneWeight from './1046.last-stone-weight'

describe('last stone weight', () => {
    test('input [2,7,4,1,8,1] return 1', () => {
        expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toEqual(1);
    });
    test('input [1,2,3,4,10] return 0', () => {
        expect(lastStoneWeight([1, 2, 3, 4, 10])).toEqual(0);
    });
})