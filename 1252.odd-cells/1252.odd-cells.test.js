import oddCells from './1252.odd-cells'

describe('odd cells', () => {
    test('input 2,3,[[0,1],[1,1]] return 6', () => {
        expect(oddCells([
            [0, 1],
            [1, 1]
        ])).toEqual(6);
    });
    test('input 2,2,[[1,1],[0,0]] return 0', () => {
        expect(oddCells([
            [1, 1],
            [0, 0]
        ])).toEqual(0);
    });
})