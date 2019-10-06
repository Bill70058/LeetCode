import reconstructQueue from './406.reconstruct-queue'

describe('reconstruct queue',()=>{
    test('input [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]] return [ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]',()=>{
        expect(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])).toEqual([ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ])
    })
})