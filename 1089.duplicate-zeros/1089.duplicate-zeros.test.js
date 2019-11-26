import duplicateZeros from './1089.duplicate-zeros'

describe('duplicate zeros', () => {
    test('input [1,0,2,3,0,4,5,0] return [1,0,0,2,3,0,0,4]', () => {
        expect(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
    });
    test('input [1,2,3] return [1,2,3]', () => {
        expect(duplicateZeros([1, 2, 3])).toEqual([1, 2, 3]);
    });
})