import longestPalindrome from './409.longest-palindrome'

describe('longest palindrome', () => {
    test('input "abccccdd" return 7', () => {
        expect(longestPalindrome("abccccdd")).toEqual(7);
    });
    test('input "abcde" return 0', () => {
        expect(longestPalindrome('abcde')).toEqual(1);
    });
})