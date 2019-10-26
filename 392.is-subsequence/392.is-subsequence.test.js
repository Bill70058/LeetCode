import isSubsequence from './392.is-subsequence'

describe('is subsequence', () => {
    test('input "abc","ahbgdc" return true', () => {
        expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
    });
    test('input "axc","ahbgdc" return true', () => {
        expect(isSubsequence("axc", "ahbgdc")).toBeFalsy();
    });
})