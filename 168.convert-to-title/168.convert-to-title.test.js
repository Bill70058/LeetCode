import convertToTitle from './168.convert-to-title'

describe('convert to title',()=>{
    test('input 1 return A',()=>{
        expect(convertToTitle(1)).toEqual('A');
    });
    test('input 28 return AB',()=>{
        expect(convertToTitle(28)).toEqual('AB');
    });
    test('input 701 return ZY',()=>{
        expect(convertToTitle(701)).toEqual('ZY');
    });
})