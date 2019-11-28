import gcdOfStrings from './1071.gcd-of-strings'

describe('gcd of strings', () => {
    test('input "ABCABC","ABC" return "ABC"', () => {
        expect(gcdOfStrings("ABCABC", "ABC")).toEqual("ABC");
    });
    test('input "AAAAAAA","AAAAAAA" return "AAAAAAA"', () => {
        expect(gcdOfStrings("AAAAAAA", "AAAAAAA")).toEqual("AAAAAAA");
    });
})