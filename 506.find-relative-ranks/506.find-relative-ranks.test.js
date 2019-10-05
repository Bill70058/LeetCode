import findRelativeRanks from './506.find-relative-ranks'

describe('find relative ranks',()=>{
    test('input [5,4,3,2,1] return ["Gold Medal","Silver Medal","Bronze Medal","4","5"]',()=>{
        expect(findRelativeRanks([5,4,3,2,1])).toEqual(["Gold Medal","Silver Medal","Bronze Medal","4","5"]);
    });
    test('input [10,3,8,9,4] return ["Gold Medal","5","Bronze Medal","Silver Medal","4"]',()=>{
        expect(findRelativeRanks([10,3,8,9,4])).toEqual(["Gold Medal","5","Bronze Medal","Silver Medal","4"]);
    })
})