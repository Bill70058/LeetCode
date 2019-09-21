import deleteNode from './237.delete-node'
describe('return Node',()=>{
    test('input [4,5,1,9],5 return [4,1,9]',()=>{
        expect(deleteNode([4,5,1,9],5)).toEqual([4,1,9]);
    })
})