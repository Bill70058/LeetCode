import sortedSquares from './977.sorted-squares'

describe('sorted squares',()=>{
    test('input [-4,-1,0,3,10] rerurn [0,1,9,16,100]',()=>{
        expect(sortedSquares([-4,-1,0,3,10])).toEqual([0,1,9,16,100]);
    });
    test('input [-7,-3,2,3,11] return [4,9,9,49,121]',()=>{
        expect(sortedSquares([-7,-3,2,3,11])).toEqual([4,9,9,49,121]);
    })
});