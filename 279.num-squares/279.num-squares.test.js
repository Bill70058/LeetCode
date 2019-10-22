import numSquares from './279.num-squares'

describe('num squares',()=>{
    test('input 12 return 3',()=>{
        expect(numSquares(12)).toEqual(3);
    });
    test('input 13 return 2',()=>{
        expect(numSquares(13)).toEqual(2);
    });
})