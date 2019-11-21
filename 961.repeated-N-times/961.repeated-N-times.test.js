import repeatedNTimes from './961.repeated-N-times'

describe('repeated n times', () => {
    test('input [1,2,3,3] return 3', () => {
        expect(repeatedNTimes([1, 2, 3, 3])).toEqual(3);
    });
    test('input [2,1,2,5,3,2] return 2', () => {
        expect(repeatedNTimes([2, 1, 2, 5, 3, 2])).toEqual(2);
    });
    test('input [5,1,5,2,5,3,5,4] return 5', () => {
        expect(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])).toEqual(5);
    });
});