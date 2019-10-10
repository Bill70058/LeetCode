import canPlaceFlower from './605.can-place-flowers'

describe('can place flower',()=>{
    test('input [1,0,0,0,1],1 return true',()=>{
        expect(canPlaceFlower([1,0,0,0,1],1)).toBeTruthy();
    });
    test('input [1,0,0,0,1],1 return true',()=>{
        expect(canPlaceFlower([1,0,0,0,1],2)).toBeFalsy();
    });
})