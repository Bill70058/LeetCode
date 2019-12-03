import uniqueOccurrences from './1207.unique-occurrences'

describe('unique occurrences', () => {
    test('input [1,2,2,1,1,3] return true', () => {
        expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBeTruthy();
    });
    test('input [1,2] return false', () => {
        expect(uniqueOccurrences([1, 2])).toBeFalsy();
    });
    test('input [-3,0,1,-3,1,1,1,-3,10,0] return true', () => {
        expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBeTruthy();
    });
})