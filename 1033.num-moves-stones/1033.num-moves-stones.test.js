import numMovesStones from './1033.num-moves-stones'


describe('num moves stones', () => {
    test('input 1,2,5 return [1,2]', () => {
        expect(numMovesStones(1, 2, 5)).toEqual([1, 2]);
    });
    test('input 4,3,2 return [0,0]', () => {
        expect(numMovesStones(4, 3, 2)).toEqual([0, 0]);
    });
    test('input 7,4,1 return [2,4]', () => {
        expect(numMovesStones(7, 4, 1)).toEqual([2, 4]);
    });
})