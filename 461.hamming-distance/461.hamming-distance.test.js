import hammingDistance from './461.hamming-distance'

describe('hamming distance',()=>{
    test('input 1,4 return 2',()=>{
        expect(hammingDistance(1,4)).toEqual(2);
    });
    test('input 1,5 return 1',()=>{
        expect(hammingDistance(1,5)).toEqual(1);
    });
})