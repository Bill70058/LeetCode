import sortArrayByParity from './905.sort-array-by-parity'

describe('sort array by parity',()=>{
    test('input [2,3,1,4] return [2,4,1,3]',()=>{
        expect(sortArrayByParity([2,3,1,4])).toEqual([2,4,1,3]);
    });
    test('input [6,1,5,7,9] retur [6,1,5,7,9]',()=>{
        expect(sortArrayByParity([6,1,5,7,9])).toEqual([6,1,5,7,9]);
    })
})