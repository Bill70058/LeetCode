import isPerfectSquare from './367.is-perfect-square'

describe('is perfect suqare', () => {
    test('input 16 return true', () => {
        expect(isPerfectSquare(16)).toBeTruthy();
    });
    test('input 14 return false', () => {
        expect(isPerfectSquare(14)).toBeFalsy();
    });
})