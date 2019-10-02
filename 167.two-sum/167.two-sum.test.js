import twoSum from './167.two-sum'

describe('two sum',()=>{
    test('input [2,7,11,15],9 return [1,2]',()=>{
        expect(twoSum([2,7,11,15],9)).toEqual([1,2]);
    });
    test('input [1,2,3,4,5],5',()=>{
        expect(twoSum([1,2,3,4,5],5)).toEqual([1,4]);
    })
})