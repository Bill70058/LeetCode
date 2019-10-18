import plusOne from './66.plus-one'

describe('plus one',()=>{
    test('input [1,2,3] return [1,2,4]',()=>{
        expect(plusOne([1,2,3])).toEqual([1,2,4]);
    });
    test('input [9,9] return [1,0,0]',()=>{
        expect(plusOne([9,9])).toEqual([1,0,0]);
    })
})