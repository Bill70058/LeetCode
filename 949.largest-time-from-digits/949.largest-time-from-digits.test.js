import largestTimeFromDigits from './949.largest-time-from-digits'

describe('largest time from digits', () => {
    test('input [1,2,3,4] return "23:41"', () => {
        expect(largestTimeFromDigits([1, 2, 3, 4])).toEqual("23:41");
    });
    test('input [5,5,5,5] return ""', () => {
        expect(largestTimeFromDigits([5, 5, 5, 5])).toEqual("");
    });
})