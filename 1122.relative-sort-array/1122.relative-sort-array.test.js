import relativeSortArray from './1122.relative-sort-array'

describe('relative sort array',()=>{
    test('input [28,6,22,8,44,17],[22,28,8,6] return [ 22, 28, 8, 6, 17, 44 ]',()=>{
        expect(relativeSortArray([28,6,22,8,44,17],[22,28,8,6])).toEqual([ 22, 28, 8, 6, 17, 44 ]);
    });
    test('input [2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6] return [ 2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19 ]',()=>{
        expect(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6])).toEqual([ 2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19 ]);
    });
})