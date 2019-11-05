import projectionArea from './883.projection-area'

describe('projection area', () => {
    test('input [[2]] return 5', () => {
        expect(projectionArea([
            [2]
        ])).toEqual(5);
    });
    test('input [[1,2],[3,4]] return 17', () => {
        expect(projectionArea([
            [1, 2],
            [3, 4]
        ])).toEqual(17);
    });
    test('input [[1,0],[0,2]] return 8', () => {
        expect(projectionArea([
            [1, 0],
            [0, 2]
        ])).toEqual(8);
    });
    test('input [[1,1,1],[1,0,1],[1,1,1]] return 14', () => {
        expect(projectionArea([
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ])).toEqual(14);
    });
    test('input [[2,2,2],[2,1,2],[2,2,2]] return 21', () => {
        expect(projectionArea([
            [2, 2, 2],
            [2, 1, 2],
            [2, 2, 2]
        ])).toEqual(21);
    });
})