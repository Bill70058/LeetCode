import findDisappearedNumbers from './448.find-disappeared-numbers.js';

describe('find disappeared numbers',()=>{
    test('input [4,3,2,7,8,2,3,1] return [5,6]',()=>{
        expect(findDisappearedNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
    });
})