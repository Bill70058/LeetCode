import minTimeToVisitAllPoints from './1266.min-time-to-visit-all-points'

describe('min time to visit all points', () => {
    test('input [[1,1],[3,4],[-1,0]] return 7', () => {
        expect(minTimeToVisitAllPoints([
            [1, 1],
            [3, 4],
            [-1, 0]
        ])).toEqual(7);
    });
    test('input [[3,2],[-2,2]] return 5', () => {
        expect(minTimeToVisitAllPoints([
            [3, 2],
            [-2, 2]
        ])).toEqual(5);
    });
})