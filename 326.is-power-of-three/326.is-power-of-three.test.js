import isPowerOfThree from './326.is-power-of-three'

describe('is power of three',()=>{
    test('input 27 return true',()=>{
        expect(isPowerOfThree(27)).toBeTruthy();
    });
    test('input 0 return false',()=>{
        expect(isPowerOfThree(0)).toBeFalsy();
    });
    test('input 9 return false',()=>{
        expect(isPowerOfThree(9)).toBeTruthy();
    });
    test('input 45 return false',()=>{
        expect(isPowerOfThree(45)).toBeFalsy();
    });
})