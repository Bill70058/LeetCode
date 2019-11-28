import numEquivDominoPairs from './1128.num-equiv-domino-pairs'

describe('num equiv domino pairs', () => {
    test('input [[1,2],[2,1],[3,4],[5,6]] return 1', () => {
        expect(numEquivDominoPairs([
            [1, 2],
            [2, 1],
            [3, 4],
            [5, 6]
        ])).toEqual(1);
    });
    test('input [[1,2],[2,1],[3,4],[4,3]] return 2', () => {
        expect(numEquivDominoPairs([
            [1, 2],
            [2, 1],
            [3, 4],
            [4, 3]
        ])).toEqual(2);
    });
})