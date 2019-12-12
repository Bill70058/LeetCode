import longestPalindrome from './5.longest-palindrome'

describe('longest palindrome',()=>{
    test('input "babad" return "aba"',()=>{
        expect(longestPalindrome("babad")).toEqual("aba");
    });
    test('input "abcda" return "a"',()=>{
        expect(longestPalindrome("abcda")).toEqual("a");
    });
})