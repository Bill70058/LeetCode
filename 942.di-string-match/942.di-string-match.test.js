import diStringMatch from './942.di-string-match'

describe('di string match',()=>{
    test('input IDID return [0,4,1,3,2]',()=>{
        expect(diStringMatch('IDID')).toEqual([0,4,1,3,2]);
    });
    test('input III return [0,1,2,3]',()=>{
        expect(diStringMatch('III')).toEqual([0,1,2,3]);
    });
    test('input DDI [3,2,0,1]',()=>{
        expect(diStringMatch('DDI')).toEqual([3,2,0,1]);
    });
})