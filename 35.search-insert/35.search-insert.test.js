import searchInsert from './35.search-insert'

describe('search insert',()=>{
    test('input [1,3,5,6], 5 return 2',()=>{
        expect(searchInsert([1,3,5,6], 5)).toEqual(2);
    });
    test('input [1,3,5,6], 2 return 1',()=>{
        expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    });
    test('input [1,3,5,6], 7 return 4',()=>{
        expect(searchInsert([1,3,5,6], 7)).toEqual(4);
    });
    test('input [1,3,5,6], 0 return 0',()=>{
        expect(searchInsert([1,3,5,6], 0)).toEqual(0);
    })
})