import lengthOfLongestSubstring from './3.length-of-longest-substring'

describe('length of longest substring', () => {
    test('input "abcabcbb" return 3', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    });
    test('input "bbbbb" return 1', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    });
    test('input "pwwkew" return 3', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    });
})