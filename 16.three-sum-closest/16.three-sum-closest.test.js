import threeSumClosest from './16.three-sum-closest'

describe('three sum closest',()=>{
    test('[-1，2，1，-4],1',()=>{
        expect(threeSumClosest([-1,2,1,-4],1)).toEqual(2)
    })
})