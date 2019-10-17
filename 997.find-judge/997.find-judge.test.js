import findJudge from './997.find-judge'

describe('find judge',()=>{
    test('input 2,[[1,2]] return 2',()=>{
        expect(findJudge(2,[[1,2]])).toEqual(2);
    });
    test('input 3,[[1,3],[2,3]] return 3',()=>{
        expect(findJudge(3,[[1,3],[2,3]])).toEqual(3);
    });
    test('input 3,[[1,3],[2,3],[3,1]] return -1',()=>{
        expect(findJudge(3,[[1,3],[2,3],[3,1]])).toEqual(-1);
    });
})