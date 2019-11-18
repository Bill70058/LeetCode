import numSpecialEquivGroups from './893.num-special-equiv-groups'

describe('num special equiv groups', () => {
    test('input ["a","b","c","a","c","c"] return 3', () => {
        expect(numSpecialEquivGroups(["a", "b", "c", "a", "c", "c"])).toEqual(3);
    });
    test('input ["aa","bb","ab","ba"] return 4', () => {
        expect(numSpecialEquivGroups(["aa", "bb", "ab", "ba"])).toEqual(4);
    });
    test('input ["abc","acb","bac","bca","cab","cba"] return 3', () => {
        expect(numSpecialEquivGroups(["abc", "acb", "bac", "bca", "cab", "cba"])).toEqual(3);
    });
    test('input ["abcd","cdab","adcb","cbad"] return 1', () => {
        expect(numSpecialEquivGroups(["abcd", "cdab", "adcb", "cbad"])).toEqual(1);
    });
})