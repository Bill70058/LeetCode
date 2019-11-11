import dominantIndex from './747.dominant-index'

describe('dominant index', () => {
    test('input [3, 6, 1, 0] return 1', () => {
        expect(dominantIndex([3, 6, 1, 0])).toEqual(1);
    });
    test('input [1, 2, 3, 4] return -1', () => {
        expect(dominantIndex([1, 2, 3, 4])).toEqual(-1);
    });
})