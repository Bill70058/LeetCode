import countPrimeSetBits from './762.count-prime-set-bits'

describe('count prime set bits', () => {
    test('input 6,10 return 4', () => {
        expect(countPrimeSetBits(6, 10)).toEqual(4);
    });
    test('input 10,15 return 5', () => {
        expect(countPrimeSetBits(10, 15)).toEqual(5);
    });
})