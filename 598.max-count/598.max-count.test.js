import maxCount from './598.max-count'

describe('max count',()=>{
    test('input 3,3,[[2,2],[3,3]]',()=>{
        expect(maxCount(3,3,[[2,2],[3,3]])).toEqual(4);
    });
    test('input 3,3,[[2,1],[1,2]]',()=>{
        expect(maxCount(3,3,[[1,2],[2,1]])).toEqual(1);
    });
})