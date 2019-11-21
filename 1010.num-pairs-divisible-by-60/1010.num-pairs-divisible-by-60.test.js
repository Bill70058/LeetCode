import numPairsDivisibleBy60 from './1010.num-pairs-divisible-by-60'

describe('num pairs divisible by 60', () => {
    test('input [30,20,150,100,40] return 3', () => {
        expect(numPairsDivisibleBy60([30, 20, 150, 100, 40])).toEqual(3);
    });
    test('input [60,60,60] return 3', () => {
        expect(numPairsDivisibleBy60([60, 60, 60])).toEqual(3);
    });
})