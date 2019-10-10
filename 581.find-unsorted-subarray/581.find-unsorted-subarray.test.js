import findUnsortedSubarray from './581.find-unsorted-subarray'

describe('find unsorted subarray',()=>{
    test('input [2,6,4,8,10,9,15] return 5',()=>{
        expect(findUnsortedSubarray([2,6,4,8,10,9,15])).toEqual(5);
    });
    test('input [1,2,3,4] return 0',()=>{
        expect(findUnsortedSubarray([1,2,3,4])).toEqual(0);
    });
})