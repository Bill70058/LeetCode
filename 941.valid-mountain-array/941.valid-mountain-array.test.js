import validMountainArray from './941.valid-mountain-array'

describe('valid mountain array', () => {
    test('input [2,1] return false', () => {
        expect(validMountainArray([2, 1])).toBeFalsy();
    });
    test('input [3,5,5] return false', () => {
        expect(validMountainArray([3, 5, 5])).toBeFalsy();
    });
    test('input [0,3,2,1] return true', () => {
        expect(validMountainArray([0, 3, 2, 1])).toBeTruthy();
    });
})