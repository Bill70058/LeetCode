import myAtoi from './8.my-atoi'

describe('my atoi',()=>{
    test('input "42" return 42',()=>{
        expect(myAtoi("42")).toEqual(42);
    });
    test('input "   -42" return -42',()=>{
        expect(myAtoi("   -42")).toEqual(-42);
    });
    test('input "words and 987" return 0',()=>{
        expect(myAtoi("words and 987")).toEqual(0);
    });
    test('input "4193 with words" return 4193',()=>{
        expect(myAtoi("4193 with words")).toEqual(4193);
    });
    test('input "-91283472332" return -2147483648',()=>{
        expect(myAtoi("-91283472332")).toEqual(-2147483648);
    });
})