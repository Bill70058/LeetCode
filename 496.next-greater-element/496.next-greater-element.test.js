import nextGreaterElement from './496.next-greater-element'

describe('next greater element', () => {
    test('input [4,1,2],[1,3,4,2] return [-1,3,-1]', () => {
        expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
    });
    test('input [2,4],[1,2,3,4] return [3,-1]', () => {
        expect(nextGreaterElement([2, 4], [1, 2, 3, 4])).toEqual([3, -1]);
    });
})