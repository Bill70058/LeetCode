import maxProfit from './122.max-profit'

describe('max profit',()=>{
    test('input [7,1,5,3,6,4] return 7 (1-5,3-6)',()=>{
        expect(maxProfit([7,1,5,3,6,4])).toEqual(7);
    });
    test('input [1,2,3,4,5] return 4 (1-5)',()=>{
        expect(maxProfit([1,2,3,4,5])).toEqual(4);
    });
    test('input [7,6,4,3,1] return 4 (1-5)',()=>{
        expect(maxProfit([7,6,4,3,1])).toEqual(0);
    });
})