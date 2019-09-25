import findKthLargest from './215.find-kth-largest'

describe('find kth largest',()=>{
    test('input [3,2,1,5,6,4],2. return 5',()=>{
        expect(findKthLargest([3,2,1,5,6,4],2)).toEqual(5);
    });
    test('input [3,2,3,1,2,4,5,5,6],4 return 4',()=>{
        expect(findKthLargest([3,2,3,1,2,4,5,5,6],4)).toEqual(4);
    })
})