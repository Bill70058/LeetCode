import isMonotonic from './896.is-monotonic'

describe('is monotonic', () => {
    test('input [1,2,2,3] return true', () => {
        expect(isMonotonic([1, 2, 2, 3])).toBeTruthy();
    });
    test('input [[6,5,4,4] return true', () => {
        expect(isMonotonic([6, 5, 4, 4])).toBeTruthy();
    });
    test('input [1,3,2] return false', () => {
        expect(isMonotonic([1, 3, 2])).toBeFalsy();
    });
    test('input [1,2,4,5] return true', () => {
        expect(isMonotonic([1, 2, 4, 5])).toBeTruthy();
    });
    test('input [1,1,1] return true', () => {
        expect(isMonotonic([1, 1, 1])).toBeTruthy();
    });
})