import containsDuplicate from './217.contains-duplicate'

describe('if no single return true',()=>{
    test('input [2,2,1] return true',()=>{
        expect(containsDuplicate([2,2,1])).toBeTruthy();
    });
    test('input [1,2,3,1] return true',()=>{
        expect(containsDuplicate([1,2,3,1])).toBeTruthy();
    });
    test('input [1,2,3,4] return false',()=>{
        expect(containsDuplicate([1,2,3,4])).toBeFalsy();
    });
})