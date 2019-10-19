import isHappy from './202.is-happy'

describe('is happy',()=>{
    test('input 19 return true',()=>{
        expect(isHappy(19)).toBeTruthy();
    });
    test('input 38 return false',()=>{
        expect(isHappy(38)).toBeFalsy();
    })
})