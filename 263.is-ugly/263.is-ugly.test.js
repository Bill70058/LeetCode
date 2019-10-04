import isUgly from './263.is-ugly'

describe('is ugly',()=>{
    test('input 6 return true',()=>{
        expect(isUgly(6)).toBeTruthy();
    });
    test('input 0 return false',()=>{
        expect(isUgly(0)).toBeFalsy();
    });
    test('input 1 return true',()=>{
        expect(isUgly(1)).toBeTruthy();
    })
})