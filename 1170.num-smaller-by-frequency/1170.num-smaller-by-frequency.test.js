import numSmallerByFrequency from './1170.num-smaller-by-frequency'

describe('num smaller by frequency', () => {
    test('input ["cbd"],["zaaaz"] return [1]', () => {
        expect(numSmallerByFrequency(["cbd"], ["zaaaz"])).toEqual([1]);
    });
    test('input ["bbb","cc"],["a","aa","aaa","aaaa"] return [1,2]', () => {
        expect(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"])).toEqual([1, 2]);
    });
})