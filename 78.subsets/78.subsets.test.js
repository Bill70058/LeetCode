import subsets from './78.subsets'

describe('subsets',()=>{
    test('input [1,2,3] return [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]',()=>{
        expect(subsets([1,2,3])).toEqual([ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]);
    })
})