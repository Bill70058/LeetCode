import canFinish from './207.can-finish'

describe('can finish', () => {
    test('input 2,[[1,0]] return true', () => {
        expect(canFinish(2, [
            [1, 0]
        ])).toBeTruthy();
    });
    test('input 2, [[1,0],[0,1]] return false', () => {
        expect(canFinish(2, [
            [1, 0],
            [0, 1]
        ])).toBeFalsy();
    });
})