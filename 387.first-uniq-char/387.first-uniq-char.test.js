import firstUniqChar from './387.first-uniq-char'

describe('first uniq char', () => {
    test('input leetcode reutrn 0', () => {
        expect(firstUniqChar('leetcode')).toEqual('0');
    });
    test('input loveleetcode reutrn 2', () => {
        expect(firstUniqChar('loveleetcode')).toEqual('2');
    });
})