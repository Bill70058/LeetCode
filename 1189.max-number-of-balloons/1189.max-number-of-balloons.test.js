import maxNumberOfBalloons from './1189.max-number-of-balloons'

describe('max number of balloons', () => {
    test('input "nlaebolko" return 1', () => {
        expect(maxNumberOfBalloons("nlaebolko")).toEqual(1);
    });
    test('input "leetcode" return 0', () => {
        expect(maxNumberOfBalloons("leetcode")).toEqual(0);
    });
    test('input "loonbalxballpoon" return 2', () => {
        expect(maxNumberOfBalloons("loonbalxballpoon")).toEqual(2);
    });
})