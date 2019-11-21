import bitwiseComplement from './1009.bitwise-complement'

describe('bitwise complement', () => {
    test('input 5 return 2', () => {
        expect(bitwiseComplement(5)).toEqual(2);
    });
    test('input 7 return 0', () => {
        expect(bitwiseComplement(7)).toEqual(0);
    });
    test('input 10 return 5', () => {
        expect(bitwiseComplement(10)).toEqual(5);
    });
})