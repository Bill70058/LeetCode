import largestPerimeter from './976.largest-perimeter'

describe('largest perimeter',()=>{
    test('input [2,1,2] return 5',()=>{
        expect(largestPerimeter([2,1,2])).toEqual(5);
    });
    test('input [1,2,1] return 0',()=>{
        expect(largestPerimeter([1,2,1])).toEqual(0);
    });
    test('input [3,2,3,4] return 10',()=>{
        expect(largestPerimeter([3,2,3,4])).toEqual(10);
    });
})