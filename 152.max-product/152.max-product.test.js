import maxProduct from './152.max-product'

describe('max product',()=>{
    test('input [2,3,-2,4] return 6',()=>{
        expect(maxProduct([2,3,-2,4])).toEqual(6);
    });
    test('input [2,3,-2,4,-2] return 96',()=>{
        expect(maxProduct([2,3,-2,4,-2])).toEqual(96);
    });
    test('input [-2] return -2',()=>{
        expect(maxProduct([-2])).toEqual(-2);
    });
})