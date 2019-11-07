import findTheDifference from './389.find-the-difference'

describe('find the difference',()=>{
    test('input "abcd","abcde" return e',()=>{
        expect(findTheDifference('abcd','abcde')).toEqual('e');
    });
    test('input "abcdefg","abcdefgh" return h',()=>{
        expect(findTheDifference('abcdefg','abcdefgh')).toEqual('h');
    });
})