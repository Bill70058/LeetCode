import rotatedDigits from './788.rotated-digits'

describe('rotated digits',()=>{
    test('input 10 return 4',()=>{
        expect(rotatedDigits(10)).toEqual(4);
    });
    test('input 9 return 4',()=>{
        expect(rotatedDigits(9)).toEqual(4);
    });
})