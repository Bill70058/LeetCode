import productExceptSelf from './238.product-except-self'

describe('product except self',()=>{
    test('input [1,2,3,4] return [24,12,8,6]',()=>{
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    });
    test('input [1,3,5,4] return [60,20,12,15]',()=>{
        expect(productExceptSelf([1,3,5,4])).toEqual([60,20,12,15]);
    });
})