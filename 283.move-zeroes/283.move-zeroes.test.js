import moveZeroes from './283.move-zeroes'

describe('move zeroes',()=>{
    test('input [0,1,0,2,3] return [1,2,3,0,0]',()=>{
        expect(moveZeroes([0,1,0,2,3])).toEqual([1,2,3,0,0]);
    });
    test('input [0,1,0,3,12] return [ 1, 3, 12, 0, 0 ]',()=>{
        expect(moveZeroes([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    })
})