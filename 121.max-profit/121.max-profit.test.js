import maxProfit from './121.max-profit'

describe('return max profit',()=>{
    test('input [7,1,5,3,6,4] return 5',()=>{
        expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
    });
    test('input [7,6,4,3,1] return 0',()=>{
        expect(maxProfit([7,6,4,3,1])).toEqual(0);
    })
})