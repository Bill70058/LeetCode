import sortArrayByParityII from './922.sort-array-by-parityII'

describe('sort array by parityII',()=>{
    test('input [4,2,5,7] return [4,5,2,7]',()=>{
        expect(sortArrayByParityII([4,2,5,7])).toEqual([4,5,2,7]);
    });
    test('input [4,8,5,7,10] return [4,5,8,7,10]',()=>{
        expect(sortArrayByParityII( [4,8,5,7,10])).toEqual([4,5,8,7,10])
    })
})