import dayOfTheWeek from './1185.day-of-the-week'

describe('day of the week', () => {
    test('input day = 31, month = 8, year = 2019 return "Saturday"', () => {
        expect(dayOfTheWeek(31, 8, 2019)).toEqual("Saturday");
    });
    test('input day = 18, month = 7, year = 1999 return "Sunday"', () => {
        expect(dayOfTheWeek(18, 7, 1999)).toEqual("Sunday");
    });
    test('input day = 15, month = 8, year = 1993 return "Sunday"', () => {
        expect(dayOfTheWeek(15, 8, 1993)).toEqual("Sunday");
    });
})