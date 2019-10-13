import reverseOnlyLetters from './917.reverse-only-letters'

describe('reverse only letters',()=>{
    test('input "ab-cd" return "dc-ba"',()=>{
        expect(reverseOnlyLetters('ab-cd')).toEqual("dc-ba");
    });
    test('input "Test1ng-Leet=code-Q!" return "Qedo1ct-eeLg=ntse-T!"',()=>{
        expect(reverseOnlyLetters('ab-cd')).toEqual("dc-ba");
    });
    test('input "a-bC-dEf-ghIj" return "j-Ih-gfE-dCba"',()=>{
        expect(reverseOnlyLetters("a-bC-dEf-ghIj")).toEqual("j-Ih-gfE-dCba");
    });
})