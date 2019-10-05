import fib from './509.fib'

describe('fib',()=>{
    test('input 2 reutrn 1',()=>{
        expect(fib(2)).toEqual(1);
    });
    test('input 3 return 2',()=>{
        expect(fib(3)).toEqual(2);
    });
    test('input 4 return 3',()=>{
        expect(fib(4)).toEqual(3);
    })
})