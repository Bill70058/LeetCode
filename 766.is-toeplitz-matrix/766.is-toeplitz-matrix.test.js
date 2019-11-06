import isToeplitzMatrix from './766.is-toeplitz-matrix'

describe('is toeplitz matrix', () => {
    test(`input [
        [1,2,3,4],
        [5,1,2,3],
        [9,5,1,2]
      ] return true`, () => {
        expect(isToeplitzMatrix([
            [1, 2, 3, 4],
            [5, 1, 2, 3],
            [9, 5, 1, 2]
        ])).toBeTruthy();
    });
    test(`input [[1,2],[2,2]] return false`, () => {
        expect(isToeplitzMatrix([
            [1, 2],
            [2, 2]
        ])).toBeFalsy();
    });
})