import checkStraightLine from './1232.check-straight-line'

describe('check straight line', () => {
    test('input [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] return true', () => {
        expect(checkStraightLine([
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
            [6, 7]
        ])).toBeTruthy();
    });
    test('input [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]] return false', () => {
        expect(checkStraightLine([
            [1, 1],
            [2, 2],
            [3, 4],
            [4, 5],
            [5, 6],
            [7, 7]
        ])).toBeFalsy();
    });
})