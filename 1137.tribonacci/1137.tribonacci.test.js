import tribonacci from './1137.tribonacci'

describe('tribonacci', () => {
    test('input 4 return 4', () => {
        expect(tribonacci(4)).toEqual(4);
    });
    test('input 25 return 1389537', () => {
        expect(tribonacci(25)).toEqual(1389537);
    });
})