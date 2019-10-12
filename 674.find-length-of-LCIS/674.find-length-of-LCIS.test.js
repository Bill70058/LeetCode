import findLengthOfLCIS from './674.find-length-of-LCIS'

describe('find length of LCIS',()=>{
    test('input [1,3,5,4,7] return 3',()=>{
        expect(findLengthOfLCIS([1,3,5,4,7])).toEqual(3);
    });
    test('input [] return 0',()=>{
        expect(findLengthOfLCIS([])).toEqual(0);
    });
    test('input [1] return 1',()=>{
        expect(findLengthOfLCIS([1])).toEqual(1);
    });
    test('input [2,2,2,2,2,2,2] return 1',()=>{
        expect(findLengthOfLCIS([2,2,2,2,2,2,2])).toEqual(1);
    });
    test('input [7,8,9,1,2,3,4,5,6] return 6',()=>{
        expect(findLengthOfLCIS([7,8,9,1,2,3,4,5,6])).toEqual(6);
    })
})