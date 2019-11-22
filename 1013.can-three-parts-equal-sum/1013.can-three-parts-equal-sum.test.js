import canThreePartsEqualSum from './1013.can-three-parts-equal-sum'

describe('can three parts equal sum', () => {
    test('input [0,2,1,-6,6,-7,9,1,2,0,1] return true', () => {
        expect(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1])).toBeTruthy();
    });
    test('input [0,2,1,-6,6,7,9,-1,2,0,1] return false', () => {
        expect(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1])).toBeFalsy();
    });
    test('input [3,3,6,5,-2,2,5,1,-9,4] return true', () => {
        expect(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4])).toBeTruthy();
    });
})