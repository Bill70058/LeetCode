import canWinNim from './292.canWinNim'

describe('return true/false',()=>{
    test('input a number return true/false',()=>{
        expect(canWinNim(4)).toBeFalsy();
    });
    test('input a number return true/false',()=>{
        expect(canWinNim(5)).toBeTruthy();
    });
    test('input a number return true/false',()=>{
        expect(canWinNim(6)).toBeTruthy();
    });
    test('input a number return true/false',()=>{
        expect(canWinNim(7)).toBeTruthy();
    });
    test('input a number return true/false',()=>{
        expect(canWinNim(8)).toBeFalsy();
    });
})