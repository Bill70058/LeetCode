import hammingWeight from './191.hamming-weight'


describe('hamming weight', () => {
    test('input 521 return 3', () => {
        expect(hammingWeight(521)).toEqual(3);
    });
    test('input 1 return 1', () => {
        expect(hammingWeight(1)).toEqual(1);
    });
    test('input -3 return 31', () => {
        expect(hammingWeight(-3)).toEqual(31);
    });
})