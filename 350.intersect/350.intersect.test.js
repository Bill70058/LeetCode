import intersect from './350.intersect'

describe('intersect',()=>{
    test('input [1,2,2,1],[2,2] return [2,2]',()=>{
        expect(intersect([1,2,2,1],[2,2])).toEqual([2,2]);
    });
    test('input [4,9,5],[9,4,9,8,4] return [9,4]',()=>{
        expect(intersect([4,9,5],[9,4,9,8,4])).toEqual([9,4]);
    });
})