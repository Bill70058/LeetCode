import isPowerOfTwo from './231.is-power-of-two'

describe('return is power of two',()=>{
    test('input 1 return true',()=>{
        expect(isPowerOfTwo(1)).toBeTruthy();
    });
    test('input 2 return true',()=>{
        expect(isPowerOfTwo(2)).toBeTruthy();
    });
    test('input 218 return false',()=>{
        expect(isPowerOfTwo(218)).toBeFalsy();
    })
})