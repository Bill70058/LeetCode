import divisorGame from './1025.divisor-game'

describe('divisor game',()=>{
    test('input 2 return true',()=>{
        expect(divisorGame(2)).toBeTruthy();
    });
    test('input 3 return false',()=>{
        expect(divisorGame(3)).toBeFalsy();
    });
    test('input 8 return true',()=>{
        expect(divisorGame(8)).toBeTruthy();
    });
})