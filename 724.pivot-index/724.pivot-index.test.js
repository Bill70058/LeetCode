import pivotIndex from './724.pivot-index'

describe('pivot index',()=>{
    test('input [1, 7, 3, 6, 5, 6] return 3',()=>{
        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
    });
    test('input [1, 2, 3] return -1',()=>{
        expect(pivotIndex([1, 2, 3])).toEqual(-1);
    });
})