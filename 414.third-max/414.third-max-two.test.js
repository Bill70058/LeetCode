import thirdMaxTwo from './414.third-max-two'

describe('third max',()=>{
    test('input [3,2,1] return 1',()=>{
        expect(thirdMaxTwo([3,2,1])).toEqual(1);
    });
    test('input [1,2] return 2',()=>{
        expect(thirdMaxTwo([1,2])).toEqual(2);
    });
    test('input [0] return 0',()=>{
        expect(thirdMaxTwo([0])).toEqual(0);
    })
});


