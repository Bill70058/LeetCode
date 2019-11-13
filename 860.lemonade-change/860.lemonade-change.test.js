import lemonadeChange from './860.lemonade-change'

describe('lemonade change', () => {
    test('input [5,5,5,10,20] return true', () => {
        expect(lemonadeChange([5, 5, 5, 10, 20])).toBeTruthy();
    });
    test('input [5,5,5,10] return true', () => {
        expect(lemonadeChange([5, 5, 5, 10])).toBeTruthy();
    });
    test('input [10,10] return false', () => {
        expect(lemonadeChange([10, 10])).toBeFalsy();
    });
})