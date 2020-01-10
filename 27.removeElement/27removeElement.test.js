import removeElement from './removeElement'

describe('remove element',()=>{
    test('input [3,2,2,3],3 return 2',()=>{
        expect(removeElement([3,2,2,3],3)).toEqual(2)
    })
    test('input [2,2,2,3,3,2],3 return 4',()=>{
        expect(removeElement([2,2,2,3,3,2],3)).toEqual(4)
    })
})