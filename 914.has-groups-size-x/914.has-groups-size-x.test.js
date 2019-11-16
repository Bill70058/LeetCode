import hasGroupsSizeX from './914.has-groups-size-x'

describe('has groups size x', () => {
    test('input [1,2,3,4,4,3,2,1] return true', () => {
        expect(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1])).toBeTruthy();
    });
    test('input [1,1,1,2,2,2,3,3] return false', () => {
        expect(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3])).toBeFalsy();
    });
    test('input [1] return false', () => {
        expect(hasGroupsSizeX([1])).toBeFalsy();
    });
    test('input [1,1] return true', () => {
        expect(hasGroupsSizeX([1, 1])).toBeTruthy();
    });
    test('input [1,1,2,2,2,2] return true', () => {
        expect(hasGroupsSizeX([1, 1, 2, 2, 2, 2])).toBeTruthy();
    });
})