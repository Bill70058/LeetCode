import reverseWords from './557.reverse-words'

describe('reverse words',()=>{
    test('input take return ekat',()=>{
        expect(reverseWords('take')).toEqual('ekat');
    });
    test('input abcdefg return gfedcba',()=>{
        expect(reverseWords('abcdefg')).toEqual('gfedcba');
    })
})