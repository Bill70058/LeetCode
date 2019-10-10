import maximumProduct from './628.maximum-product'

describe('maximum product',()=>{
    test('input [1,2,3,4] return 24',()=>{
        expect(maximumProduct([1,2,3,4])).toEqual(24);
    });
    test('input [-4,-3,-1,1,60] return 180',()=>{
        expect(maximumProduct([-4,-3,-1,1,60])).toEqual(720);
    });
})