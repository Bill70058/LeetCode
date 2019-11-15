import surfaceArea from './892.surface-area'

describe('surface area', () => {
    test('input [[2]] return 10', () => {
        expect(surfaceArea([
            [2]
        ])).toEqual(10);
    });
    test('input [[1,2],[3,4]] return 34', () => {
        expect(surfaceArea([
            [1, 2],
            [3, 4]
        ])).toEqual(34);
    })
    test('input [[1,0],[0,2]] return 16', () => {
        expect(surfaceArea([
            [1, 0],
            [0, 2]
        ])).toEqual(16);
    });
    test('input [[1,1,1],[1,0,1],[1,1,1]] return 32', () => {
        expect(surfaceArea([
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ])).toEqual(32);
    });
    test('input [[2,2,2],[2,1,2],[2,2,2]] return 46', () => {
        expect(surfaceArea([
            [2, 2, 2],
            [2, 1, 2],
            [2, 2, 2]
        ])).toEqual(46);
    });
})