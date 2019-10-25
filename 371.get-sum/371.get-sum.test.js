import getSum from './371.get-sum'

describe('get sum', () => {
    test('input 1,2 return 3', () => {
        expect(getSum(1, 2)).toEqual(3);
    });
    test('input -2,3 return 1', () => {
        expect(getSum(-2, 3)).toEqual(1);
    });
})