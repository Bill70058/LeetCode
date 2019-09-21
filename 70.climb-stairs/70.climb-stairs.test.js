import climbStairs from './70.climb-stairs'

describe('return climb stairs',()=>{
    test('input 2 return 2',()=>{
        expect(climbStairs(2)).toEqual(2);
    });
    test('input 3 return 3',()=>{
        expect(climbStairs(3)).toEqual(3);
    })
})