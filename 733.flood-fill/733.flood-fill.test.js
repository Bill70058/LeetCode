import floodFill from './733.flood-fill'

describe('flood fill', () => {
    test('input 1,1,2', () => {
        expect(floodFill([
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1]
        ], 1, 1, 2)).toEqual([
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1]
        ]);
    });
})