import heightChecker from './1051.height-checker'

describe('height checker', () => {
    test('input [1,1,4,2,1,3] return 3', () => {
        expect(heightChecker([1, 1, 4, 2, 1, 3])).toEqual(3);
    });
    test('input [1,2,1,2,1,1,1,2,1] return 4', () => {
        expect(heightChecker([1, 2, 1, 2, 1, 1, 1, 2, 1])).toEqual(4);
    });
})