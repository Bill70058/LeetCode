import intersection from './349.intersection'

describe('intersection',()=>{
    test('input [1,2,2,1],[2,2] return 2',()=>{
        expect(intersection([1,2,2,1],[2,2])).toEqual([2]);
    });
    test('input [4,9,5],[9,4,9,8,4] return [9,4]',()=>{
        expect(intersection([4,9,5],[9,4,9,8,4])).toEqual([9,4]);
    });
})