import powerfulIntegers from './970.powerful-integers'

describe('powerful integers', () => {
    test('input 2,3,10 return [2,3,4,5,7,9,10]', () => {
        expect(powerfulIntegers(2, 3, 10)).toEqual([2, 3, 4, 5, 7, 9, 10]);
    });
    test('input 3,5,15 return [2,4,6,8,10,14]', () => {
        expect(powerfulIntegers(3, 5, 15)).toEqual([2, 4, 6, 8, 10, 14]);
    });
})