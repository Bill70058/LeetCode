import countAndSay from './38.count-and-say'

describe('count and say',()=>{
    test('input 1 return 1',()=>{
        expect(countAndSay(1)).toEqual('1');
    });
    test('input 2 return 11',()=>{
        expect(countAndSay(2)).toEqual('11');
    });
    test('input 3 reuturn 21',()=>{
        expect(countAndSay(3)).toEqual('21');
    });
    test('input 4 reuturn 1211',()=>{
        expect(countAndSay(4)).toEqual('1211');
    });
    test('input 5 reuturn 111221',()=>{
        expect(countAndSay(5)).toEqual('111221');
    });
    test('input 6 reuturn 312211',()=>{
        expect(countAndSay(6)).toEqual('312211');
    });
})