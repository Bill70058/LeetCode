import reachNumber from './754.reach-number'

describe('reach number', () => {
    test('input 3 return 2', () => {
        expect(reachNumber(3)).toEqual(2);
    });
    test('input 2 return 3', () => {
        expect(reachNumber(2)).toEqual(3);
    });
})