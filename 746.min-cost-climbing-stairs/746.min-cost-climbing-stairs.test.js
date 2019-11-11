import minCostClimbingStairs from './746.min-cost-climbing-stairs'

describe('min cost climbing stairs', () => {
    test('input [10, 15, 20] return 15', () => {
        expect(minCostClimbingStairs([10, 15, 20])).toEqual(15);
    });
    test('input [1, 100, 1, 1, 1, 100, 1, 1, 100, 1] return 6', () => {
        expect(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toEqual(6);
    });
})