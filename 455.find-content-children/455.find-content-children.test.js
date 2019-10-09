import findContentChildren from './455.find-content-children'

describe('find content children',()=>{
    test('input [1,2,3],[1,1] return 1',()=>{
        expect(findContentChildren([1,2,3],[1,1])).toEqual(1);
    });
    test('input [1,2], [1,2,3] return 2',()=>{
        expect(findContentChildren([1,2], [1,2,3])).toEqual(2);
    })
})