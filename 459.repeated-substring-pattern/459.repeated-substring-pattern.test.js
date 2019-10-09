import repeatedSubstringPattern from './459.repeated-substring-pattern'

describe('repeated substring pattern',()=>{
    test('input abab return true',()=>{
        expect(repeatedSubstringPattern('abab')).toBeTruthy();
    });
    test('input abcabc return true',()=>{
        expect(repeatedSubstringPattern('abcabc')).toBeTruthy();
    });
    test('input abab return true',()=>{
        expect(repeatedSubstringPattern('aba')).toBeFalsy();
    });
})