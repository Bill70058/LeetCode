import flipAndInvertImage from './832.flip-and-invert-image'

describe('flip and invert image',()=>{
    test('input [[1,1,0],[1,0,1],[0,0,0]] return [[1,0,0],[0,1,0],[1,1,1]]',()=>{
        expect(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])).toEqual([[1,0,0],[0,1,0],[1,1,1]]);
    });
    test('input [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]] return [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]',()=>{
        expect(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])).toEqual([[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]);
    })
})