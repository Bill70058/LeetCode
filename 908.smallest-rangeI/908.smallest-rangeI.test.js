import smallestRangel from './908.smallest-rangeI'

describe('smallest rangel',()=>{
    test('input [1],0 return 0',()=>{
        expect(smallestRangel([1],0)).toEqual(0);
    });
    test('input [0,10],2 return 6',()=>{
        expect(smallestRangel([0,10],2)).toEqual(6);
    });
})