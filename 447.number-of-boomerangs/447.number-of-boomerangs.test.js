import numberOfBoomerangs from './447.number-of-boomerangs';

describe('number of boomerangs', () => {
    test('input [[0,0],[1,0],[2,0]] return 2', () => {
        expect(numberOfBoomerangs([
            [0, 0],
            [1, 0],
            [2, 0]
        ])).toEqual(2);
    });
    test('input [[1,0,0],[2,0,0],[0,1,0]] return 0', () => {
        expect(numberOfBoomerangs([
            [1, 0],
            [2, 0],
            [0, 1]
        ])).toEqual(0);
    })
})