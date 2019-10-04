import missingNumber from './268.missing-number'

describe('missing number',()=>{
    test('input [3,0,1] return 2',()=>{
        expect(missingNumber([3,0,1])).toEqual(2);
    });
    test('input [0,4,5,3,1] return 2',()=>{
        expect(missingNumber([0,4,5,3,1])).toEqual(2);
    })
})