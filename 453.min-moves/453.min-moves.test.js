import minMoves from './453.min-moves'

describe('min moves', () => {
    test('input [1,2,3] return 3', () => {
        expect(minMoves([1, 2, 3])).toEqual(3);
    });
    test('input [2,2,3] return 2', () => {
        expect(minMoves([2, 2, 3])).toEqual(1);
    })
})