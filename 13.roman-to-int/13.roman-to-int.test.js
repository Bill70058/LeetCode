import romanToInt from './13.roman-to-int'

describe('roman to int',()=>{
    test('input III return 3',()=>{
        expect(romanToInt('III')).toEqual(3);
    });
    test('input IV return 4',()=>{
        expect(romanToInt('IV')).toEqual(4);
    });
    test('input V return 5',()=>{
        expect(romanToInt('V')).toEqual(5);
    });
    test('input IX return 9',()=>{
        expect(romanToInt('IX')).toEqual(9);
    });
    test('input LVIII return 58',()=>{
        expect(romanToInt('LVIII')).toEqual(58);
    });
    test('input MCMXCIV return 1994',()=>{
        expect(romanToInt('MCMXCIV')).toEqual(1994);
    });
})