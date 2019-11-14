import numMagicSquaresInside from './840.num-magic-squaresInside'

describe('num magic squares inside', () => {
    test(`input [[4,3,8,4],
    [9,5,1,9],
    [2,7,6,2]] return 1`, () => {
        expect(numMagicSquaresInside([
            [4, 3, 8, 4],
            [9, 5, 1, 9],
            [2, 7, 6, 2]
        ])).toEqual(1);
    })
})