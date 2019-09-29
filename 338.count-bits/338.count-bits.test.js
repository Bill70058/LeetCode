import countBits from './338.count-bits'

describe('count bits',()=>{
    test('input 2 return [0,1,1]',()=>{
        expect(countBits(2)).toEqual([0,1,1]);
    });
    test('input 3 return [0,1,1,2]',()=>{
        expect(countBits(3)).toEqual([0,1,1,2]);
    })
})