import majorityElement from './169.majority-element'


describe('return majority element',()=>{
    test('input [3,2,3] return 3',()=>{
        expect(majorityElement([3,2,3])).toEqual(3);
    });
    test('input [1,1,2] return 1',()=>{
        expect(majorityElement([1,1,2])).toEqual(1);
    })
})