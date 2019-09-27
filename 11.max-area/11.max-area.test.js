import maxArea from './11.max-area'

describe('max area',()=>{
    test('input [1,8,6,2,5,4,8,3,7] return 49',()=>{
        expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(49);
    })
})