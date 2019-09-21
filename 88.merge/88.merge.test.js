import merge from './88.merge'

describe('return merge',()=>{
    test('input [1,2,3,0,0,0],3,[2,5,6],3 return [ 1, 2, 2, 3, 5, 6 ]',()=>{
        expect(merge([1,2,3,0,0,0],3,[2,5,6],3)).toEqual([ 1, 2, 2, 3, 5, 6 ])
    });
    test('input [0],0,[1],1 return [1]',()=>{
        expect(merge([0],0,[1],1)).toEqual([1]);
    })
})