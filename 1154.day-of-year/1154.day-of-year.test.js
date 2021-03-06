import dayOfYear from './1154.day-of-year'

describe('day of year', () => {
    test('input "2019-01-09" return 9', () => {
        expect(dayOfYear("2019-01-09")).toEqual(9);
    });
    test('input "2019-02-10" return 41', () => {
        expect(dayOfYear("2019-02-10")).toEqual(41);
    });
    test('input "2003-03-01" return 60', () => {
        expect(dayOfYear("2003-03-01")).toEqual(60);
    });
    test('input "2004-03-01" return 61', () => {
        expect(dayOfYear("2004-03-01")).toEqual(61);
    });
})