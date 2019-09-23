import reverseString from './344.reverse-string'

describe('return reverse string',()=>{
    test('input ["h","e","l","l","o"] return ["o","l","l","e","h"]',()=>{
        expect(reverseString(["h","e","l","l","o"])).toEqual(["o","l","l","e","h"]);
    })
})