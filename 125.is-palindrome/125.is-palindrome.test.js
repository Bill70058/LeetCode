import isPalindrome from './125.is-palindrome'

describe('is palindrome', () => {
    test('input "A man, a plan, a canal: Panama" return true', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBeTruthy();
    });
    test('input "race a car" return false', () => {
        expect(isPalindrome("race a car")).toBeFalsy();
    });
})