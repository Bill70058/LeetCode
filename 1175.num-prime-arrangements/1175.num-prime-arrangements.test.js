import numPrimeArrangements from './1175.num-prime-arrangements'

describe('num prime arrangements', () => {
    test('input 5 return 12', () => {
        expect(numPrimeArrangements(5)).toEqual(12);
    });
    test('input 100 return 682289015', () => {
        expect(numPrimeArrangements(100)).toEqual(682289015);
    });
})