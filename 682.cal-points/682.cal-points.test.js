import calPoints from './682.cal-points'

describe('cal points', () => {
    test('input ["5","2","C","D","+"] return 30', () => {
        expect(calPoints(["5", "2", "C", "D", "+"])).toEqual(30);
    });
    test('input ["5","-2","4","C","D","9","+","+"] return 27', () => {
        expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toEqual(27);
    });
})