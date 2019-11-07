import binaryGap from './868.binary-gap'

describe('binary gap', () => {
    test('input 22 return 2', () => {
        expect(binaryGap(22)).toEqual(2);
    });
    test('input 5 return 2', () => {
        expect(binaryGap(5)).toEqual(2);
    });
    test('input 6 return 1', () => {
        expect(binaryGap(6)).toEqual(1);
    });
    test('input 8 return 0', () => {
        expect(binaryGap(8)).toEqual(0);
    });
})