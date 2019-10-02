import checkRecord from './551.check-record'

describe('check record',()=>{
    test('input PPALLP return true',()=>{
        expect(checkRecord('PPALLP')).toBeTruthy();
    });
    test('input PPALLL return false',()=>{
        expect(checkRecord('PPALLL')).toBeFalsy();
    });
    test('input PPLALL return true',()=>{
        expect(checkRecord('PPLALL')).toBeTruthy();
    })
})