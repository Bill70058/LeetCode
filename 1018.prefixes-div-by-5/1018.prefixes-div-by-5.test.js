import prefixesDivBy5 from './1018.prefixes-div-by-5'

describe('prefixes div by 5', () => {
    test('input [0,1,1] return [true,false,false]', () => {
        expect(prefixesDivBy5([0, 1, 1])).toEqual([true, false, false]);
    });
    test('input [1,1,1] return [false,false,false]', () => {
        expect(prefixesDivBy5([1, 1, 1])).toEqual([false, false, false]);
    });
    test('input [0,1,1,1,1,1] return [true,false,false,false,true,false]', () => {
        expect(prefixesDivBy5([0, 1, 1, 1, 1, 1])).toEqual([true, false, false, false, true, false]);
    });
    test('input [1,1,1,0,1] return [false,false,false,false,false]', () => {
        expect(prefixesDivBy5([1, 1, 1, 0, 1])).toEqual([false, false, false, false, false]);
    });
})