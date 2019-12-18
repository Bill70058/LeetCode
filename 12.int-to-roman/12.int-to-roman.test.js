import intToRoman from './12.int-to-roman'

describe('int to roman', () => {
    test('input 3 return "III" ', () => {
        expect(intToRoman(3)).toEqual("III");
    });
    test('input 4 return "IV" ', () => {
        expect(intToRoman(4)).toEqual("IV");
    });
    test('input 9 return "IX" ', () => {
        expect(intToRoman(9)).toEqual("IX");
    });
    test('input 58 return "LVIII" ', () => {
        expect(intToRoman(58)).toEqual("LVIII");
    });
    test('input 1994 return "MCMXCIV" ', () => {
        expect(intToRoman(1994)).toEqual("MCMXCIV");
    });
})