import fraction from './LCP2.fraction'

describe('fraction', () => {
    test('input [3, 2, 0, 2] return [13,4]', () => {
        expect(fraction([3, 2, 0, 2])).toEqual([13, 4]);
    });
    test('input [0, 0, 3] return [3,1]', () => {
        expect(fraction([0, 0, 3])).toEqual([3, 1]);
    });
})