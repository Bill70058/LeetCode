import arrangeCoins from './441.arrange-coins'

describe('arrange coins', () => {
    test('input 5 return 2', () => {
        expect(arrangeCoins(5)).toEqual(2);
    });
    test('input 8 return 3', () => {
        expect(arrangeCoins(8)).toEqual(3);
    });
})