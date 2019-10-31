import countBinarySubstrings from './696.count-binary-substrings'

describe('count binary substrings', () => {
    test('input "00110011" return 6', () => {
        expect(countBinarySubstrings("00110011")).toEqual(6);
    });
    test('input "10101" return 4', () => {
        expect(countBinarySubstrings("10101")).toEqual(4);
    });
})