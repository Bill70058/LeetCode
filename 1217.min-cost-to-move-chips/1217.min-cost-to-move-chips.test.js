import minCostToMoveChips from './1217.min-cost-to-move-chips'

describe('min cost to move chips', () => {
    test('input [1,2,3] return 1', () => {
        expect(minCostToMoveChips([1, 2, 3])).toEqual(1);
    });
    test('input [2,2,2,3,3] return 2', () => {
        expect(minCostToMoveChips([2, 2, 2, 3, 3])).toEqual(2);
    });
})