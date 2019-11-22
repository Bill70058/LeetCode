import addToArrayForm from './989.add-to-array-form'

describe('add to array form ', () => {
    test('input [1,2,0,0],34 return [1,2,3,4]', () => {
        expect(addToArrayForm([1, 2, 0, 0], 34)).toEqual([1, 2, 3, 4]);
    });
    test('input [2,7,4],181 return [4,5,5]', () => {
        expect(addToArrayForm([2, 7, 4], 181)).toEqual([4, 5, 5]);
    });
    test('input [2,1,5],806 return [1,0,2,1]', () => {
        expect(addToArrayForm([2, 1, 5], 806)).toEqual([1, 0, 2, 1]);
    });
    test('input [9,9,9,9,9,9,9,9,9,9],1 return [1,0,0,0,0,0,0,0,0,0,0]', () => {
        expect(addToArrayForm([9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 1)).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
})