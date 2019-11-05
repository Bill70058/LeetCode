import distributeCandies from './1103.distribute-candies'


describe('distribute candies', () => {
    test('input 7,4 return [1,2,3,1]', () => {
        expect(distributeCandies(7, 4)).toEqual([1, 2, 3, 1]);
    });
    test('input 10,3 return [5,2,3]', () => {
        expect(distributeCandies(10, 3)).toEqual([5, 2, 3]);
    });
})