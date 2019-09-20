import maxSubArray from './53.max-sub-array'



describe('return max sub array',()=>{
    test('input [-2,1,-3,4,-1,2,1,-5,4] return 6',()=>{
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    })
})
