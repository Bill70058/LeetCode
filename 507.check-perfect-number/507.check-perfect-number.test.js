import checkPerfectNumber from './507.check-perfect-number'

describe('check perfect number',()=>{
    test('input 36 return false',()=>{
        expect(checkPerfectNumber(36)).toBeFalsy();
    });
    test('input 1 return false',()=>{
        expect(checkPerfectNumber(1)).toBeFalsy();
    });
    test('input 28 return true',()=>{
        expect(checkPerfectNumber(28)).toBeTruthy();
    })
})