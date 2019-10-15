import shortestToChar from './821.shortest-to-char'

describe('shortest to char',()=>{
    test('input "loveleetcode","e" return [3,2,1,0,1,0,0,1,2,2,1,0]',()=>{
        expect(shortestToChar("loveleetcode","e")).toEqual([3,2,1,0,1,0,0,1,2,2,1,0]);
    });
    test('input "aaba","b" return [2,1,0,1]',()=>{
        expect(shortestToChar("aaba","b")).toEqual([2,1,0,1]);
    });
})