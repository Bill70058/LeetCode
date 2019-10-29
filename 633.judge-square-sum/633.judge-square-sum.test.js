import judgeSquareSum from './633.judge-square-sum'

describe('judge square sum',()=>{
    test('input 5 return true',()=>{
        expect(judgeSquareSum(5)).toBeTruthy();
    });
    test('input 3 return falsy',()=>{
        expect(judgeSquareSum(3)).toBeFalsy();
    });
})