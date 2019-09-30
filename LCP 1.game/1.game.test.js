import game from './1.game'

describe('game',()=>{
    test('input [1,2,3],[1,2,3] return 3',()=>{
        expect(game([1,2,3],[1,2,3])).toEqual(3);
    });
    test('input [2,2,3],[1,2,3] return 1',()=>{
        expect(game([2,2,3],[1,2,3])).toEqual(2);
    })
})