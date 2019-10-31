import hasAlternatingBits from './693.has-alternating-bits'

describe('has alternating bits', () => {
    test('input 5 return true', () => {
        expect(hasAlternatingBits(5)).toBeTruthy();
    });
    test('input 11 return false', () => {
        expect(hasAlternatingBits(11)).toBeFalsy();
    });
    test('input 7 return false', () => {
        expect(hasAlternatingBits(7)).toBeFalsy();
    });
    test('input 10 return true', () => {
        expect(hasAlternatingBits(10)).toBeTruthy();
    });
})