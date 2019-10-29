import distributeCandies from './575.distribute-candies'

describe('distribute candies', () => {
    test('input  [1,1,2,2,3,3] return 3', () => {
        expect(distributeCandies([1, 1, 2, 2, 3, 3])).toEqual(3);
    });
    test('input  [1,1,2,3] return 2', () => {
        expect(distributeCandies([1, 1, 2, 3])).toEqual(2);
    });
})