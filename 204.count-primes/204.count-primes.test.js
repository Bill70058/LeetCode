import countPrimes from './204.count-primes'

describe('count primes',()=>{
    test('input 10 return 4',()=>{
        expect(countPrimes(10)).toEqual(4);
    });
    test('input 12 return 5',()=>{
        expect(countPrimes(12)).toEqual(5);
    });
})