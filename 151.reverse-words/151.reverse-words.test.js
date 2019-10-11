import reverseWords from './151.reverse-words'

describe('reverse words',()=>{
    test('input "the sky is blue" return "blue is sky the" ',()=>{
        expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
    });
    test('input "  hello world!  " return "world! hello" ',()=>{
        expect(reverseWords("  hello world!  ")).toEqual("world! hello");
    });
    test('input "a good   example" return "example good a" ',()=>{
        expect(reverseWords("a good   example")).toEqual("example good a");
    });
})