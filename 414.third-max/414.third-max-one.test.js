import thirdMaxOne from './414.third-max-one'

describe('third max',()=>{
    test('input [3,2,1] return 1',()=>{
        expect(thirdMaxOne([3,2,1])).toEqual(1);
    });
    test('input [1,2] return 2',()=>{
        expect(thirdMaxOne([1,2])).toEqual(2);
    });
    test('input [0] return 0',()=>{
        expect(thirdMaxOne([0])).toEqual(0);
    });
});


