import wordPattern from './290.word-pattern'

describe('word pattern ',()=>{
    test('input "abba","dog cat cat dog" return true',()=>{
        expect(wordPattern('abba','dog cat cat dog')).toBeTruthy();
    });
    test('input  "abba","dog cat cat fish" return false',()=>{
        expect(wordPattern("abba","dog cat cat fish")).toBeFalsy();
    });
    test('input  "aaaa","dog cat cat dog" return false',()=>{
        expect(wordPattern("aaaa","dog cat cat dog")).toBeFalsy();
    });
})