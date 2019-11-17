import orangesRotting from './994.oranges-rotting'

describe('oranges rotting', () => {
    test('input [[2,1,1],[1,1,0],[0,1,1]] return 4', () => {
        expect(orangesRotting([
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1]
        ])).toEqual(4);
    });
    test('input [[2,1,1],[0,1,1],[1,0,1]] return -1', () => {
        expect(orangesRotting([
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1]
        ])).toEqual(-1);
    });
    test('input [[0,2]] return 0', () => {
        expect(orangesRotting([
            [0, 2]
        ])).toEqual(0);
    });
})