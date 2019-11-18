import minDeletionSize from './944.min-deletion-size'

describe('min deletion size', () => {
    test('input ["cba", "daf", "ghi"] return 1', () => {
        expect(minDeletionSize(["cba", "daf", "ghi"])).toEqual(1);
    });
    test('input ["a", "b"] return 0', () => {
        expect(minDeletionSize(["a", "b"])).toEqual(0);
    });
    test('input ["zyx", "wvu", "tsr"] return 3', () => {
        expect(minDeletionSize(["zyx", "wvu", "tsr"])).toEqual(3);
    });
})