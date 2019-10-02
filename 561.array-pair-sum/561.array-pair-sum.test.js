import arrayPairSum from './561.array-pair-sum'

describe('array pair sum',()=>{
    test('input [1,4,3,2] return 4',()=>{
        expect(arrayPairSum([1,4,3,2])).toEqual(4);
    });
    test('input [1,4,3,2,6,5] return 9',()=>{
        expect(arrayPairSum([1,4,3,2,6,5])).toEqual(9);
    });
})