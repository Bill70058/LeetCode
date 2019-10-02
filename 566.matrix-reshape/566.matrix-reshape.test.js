import matrixReshape from './566.matrix-reshape'
import { exec } from 'child_process';

describe('matrix reshape',()=>{
    test('input [[1,2],[3,4]],r = 1, c = 4 return [[1,2,3,4]]',()=>{
        expect(matrixReshape([[1,2],[3,4]],1,4)).toEqual([[1,2,3,4]]);
    });
    test('input  [[1,2],[3,4]],r = 2, c = 4 return [[1,2],[3,4]]',()=>{
        expect(matrixReshape([[1,2],[3,4]],2,4)).toEqual([[1,2],[3,4]]);
    })
})