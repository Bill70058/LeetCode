import countCharacters from './1160.count-characters'

describe('count characters', () => {
    test('input ["cat","bt","hat","tree"],"atach" return 6', () => {
        expect(countCharacters(["cat", "bt", "hat", "tree"], "atach")).toEqual(6);
    });
    test('input ["hello","world","leetcode"],"welldonehoneyr" return 10', () => {
        expect(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr")).toEqual(10);
    });
})