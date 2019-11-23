import allCellsDistOrder from './1030.all-cells-dist-order'

describe('all cells dist order', () => {
    test('input 1,2,0,0 return [[0,0],[0,1]]', () => {
        expect(allCellsDistOrder(1, 2, 0, 0)).toEqual([
            [0, 0],
            [0, 1]
        ]);
    });
    test('input 2,2,0,1 return [[0,1],[0,0],[1,1],[1,0]]', () => {
        expect(allCellsDistOrder(2, 2, 0, 1)).toEqual([
            [0, 1],
            [0, 0],
            [1, 1],
            [1, 0]
        ]);
    });
    test('input 2,3,1,2 return [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]', () => {
        expect(allCellsDistOrder(2, 3, 1, 2)).toEqual([
            [1, 2],
            [0, 2],
            [1, 1],
            [0, 1],
            [1, 0],
            [0, 0]
        ]);
    });
})