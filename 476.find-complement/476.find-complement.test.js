import findComplement from './476.find-complement'

describe('find complement',()=>{
    test('input 5 return 2',()=>{
        expect(findComplement(5)).toEqual(2);
    });
    test('input 1 return 0',()=>{
        expect(findComplement(1)).toEqual(0);
    })
})