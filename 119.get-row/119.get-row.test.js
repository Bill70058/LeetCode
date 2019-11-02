import getRow from './119.get-row'

describe('get row',()=>{
    test('input 3 return [1,3,3,1]',()=>{
        expect(getRow(3)).toEqual([1,3,3,1]);
    });
    test('input 4 return [1,4,6,4,1]',()=>{
        expect(getRow(4)).toEqual([1,4,6,4,1]);
    });
})