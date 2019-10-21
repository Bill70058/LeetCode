import peakIndexInMountainArray from './852.peak-index-in-mountain-array'

describe('peak index in mountain array',()=>{
    test('input [0,1,0] return 1',()=>{
        expect(peakIndexInMountainArray([0,1,0])).toEqual(1);
    });
    test('input [0,2,1,0] return 1',()=>{
        expect(peakIndexInMountainArray([0,2,1,0])).toEqual(1);
    });
})