import numberFactorials from './172.number-factorials'

describe('number factorials',()=>{
    test('input 3 return 0',()=>{
        expect(numberFactorials(3)).toEqual(0);
    });
    test('input 5 return 1',()=>{
        expect(numberFactorials(5)).toEqual(1);
    });
    test('input 25 return 6',()=>{
        expect(numberFactorials(25)).toEqual(6);
    });
})