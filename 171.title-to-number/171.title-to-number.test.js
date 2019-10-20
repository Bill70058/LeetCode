import titleToNumber from './171.title-to-number'

describe('title to number',()=>{
    test('input A return 1',()=>{
        expect(titleToNumber('A')).toEqual(1);
    });
    test('input AB return 28',()=>{
        expect(titleToNumber('AB')).toEqual(28);
    });
    test('input ZY return 701',()=>{
        expect(titleToNumber('ZY')).toEqual(701);
    });
})