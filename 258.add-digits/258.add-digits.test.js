import addDigits from './258.add-digits'

describe('add digits',()=>{
    test('input 38 return 2',()=>{
        expect(addDigits(38)).toEqual(2);
    });
    test('input 123 return 6',()=>{
        expect(addDigits(123)).toEqual(6);
    });
    test('input 199 return 1',()=>{
        expect(addDigits(199)).toEqual(1);
    })
})