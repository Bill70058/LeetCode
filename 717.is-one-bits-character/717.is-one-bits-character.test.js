import isOneBitsCharacter from './717.is-one-bits-character'

describe('is one bits character',()=>{
    test('input [1,0,0] return true',()=>{
        expect(isOneBitsCharacter([1,0,0])).toBeTruthy();
    });
    test('input [1,1,1,0] return false',()=>{
        expect(isOneBitsCharacter([1,1,1,0])).toBeFalsy();
    });
})