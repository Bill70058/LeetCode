import convert from './6.convert'

describe('convert', () => {
    test('input "LEETCODEISHIRING",3 return "LCIRETOESIIGEDHN"', () => {
        expect(convert("LEETCODEISHIRING", 3)).toEqual("LCIRETOESIIGEDHN");
    });
    test('input "LEETCODEISHIRING",4 return "LDREOEIIECIHNTSG"', () => {
        expect(convert("LEETCODEISHIRING", 4)).toEqual("LDREOEIIECIHNTSG");
    });
})