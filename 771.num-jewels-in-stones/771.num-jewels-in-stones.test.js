import numJewelsInStones from './771.num-jewels-in-stones'

describe('num jewels in stones',()=>{
    test('input aA,aAAbbbb return 3',()=>{
        expect(numJewelsInStones('aA','aAAbbbb')).toEqual(3);
    });
    test('input aAb,aAAbBBbB return 5',()=>{
        expect(numJewelsInStones('aAb','aAAbBBbB')).toEqual(5);
    });
    test('input z,ZZ return 0',()=>{
        expect(numJewelsInStones('z','ZZ')).toEqual(0);
    });
})