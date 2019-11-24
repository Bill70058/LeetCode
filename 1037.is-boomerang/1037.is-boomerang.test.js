import isBoomerang from './1037.is-boomerang'

describe('is boomerang', () => {
    test('input [[1,1],[2,3],[3,2]] return true', () => {
        expect(isBoomerang([
            [1, 1],
            [2, 3],
            [3, 2]
        ])).toBeTruthy();
    });
    test('input [[1,1],[2,2],[3,3]] return false', () => {
        expect(isBoomerang([
            [1, 1],
            [2, 2],
            [3, 3]
        ])).toBeFalsy();
    });
})