import rob from './198.rob'

describe('rob',()=>{
    test('input [1,2,3,1] return 4',()=>{
        expect(rob([1,2,3,1])).toEqual(4);
    });
    test('input [2,1,1,2] return 4',()=>{
        expect(rob([2,1,1,2])).toEqual(4);
    })
})