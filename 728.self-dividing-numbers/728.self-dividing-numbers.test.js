import selfDividingNumbers from './728.self-dividing-numbers'

describe('self dividing numbers', () => {
    test('input 1,22 return [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]', () => {
        expect(selfDividingNumbers(1, 22)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
    });
    test('input 1,10 return [1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
        expect(selfDividingNumbers(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
})